import React, { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Web3 from 'web3';
import { registrationABI, registrationAddress } from '../../Constants/config';
import Header from '../../components/header';

const web3 = new Web3('https://rpc.api.moonbase.moonbeam.network');
const registrationContract = new web3.eth.Contract(registrationABI, registrationAddress);
registrationContract.handleRevert = true;

const View = () => {
  const { address: userAddress, isConnected } = useAccount();
  const [ips, setIps] = useState([]);

  useEffect(() => {
    if (isConnected) {
      fetchIps();
    }
  }, [isConnected, userAddress]);

  const fetchIps = async () => {
    try {
      const ips = await registrationContract.methods.getAllIPs().call();
      setIps(ips);
      console.log(ips);
    } catch (error) {
      console.error('Error fetching IPs', error);
    }
  };

  const userIps = ips.filter(ip => ip.owner.toLowerCase() === userAddress?.toLowerCase());

  return (
    <div>
      <Header />
      <p className="text-4xl font-bold mt-4 text-center">View page</p>
      <div className="mt-8 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Your IPFS Hashes</h2>
        {userIps.length === 0 ? (
          <p className="text-gray-700">No IPFS hashes found for this address.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-16 py-3 px-4 uppercase font-semibold text-sm text-center">#</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Timestamp</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-left">IPFS Hash</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {userIps.map((ip, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-center">{index + 1}</td>
                    <td className="py-3 px-4">
                      {new Date(Number(ip.timestamp) * 1000).toLocaleString()}
                    </td>
                    <td className="py-3 px-4">{ip.ipfsHash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
