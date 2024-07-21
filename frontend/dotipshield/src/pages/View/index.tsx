import React, { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Web3 from 'web3';
import { registrationABI, registrationAddress } from '../../Constants/config';
import Header from '../../components/header';

const web3 = new Web3('https://rpc.api.moonbase.moonbeam.network');
const registrationContract = new web3.eth.Contract(registrationABI, registrationAddress);
registrationContract.handleRevert = true;

const View: NextPage = () => {
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
      <p className="text-4xl font-bold mt-4">View page</p>

      <div className="mt-4">
        <h2 className="text-xl font-bold">Your IPFS Hashes</h2>
        {userIps.length === 0 ? (
          <p>No IPFS hashes found for this address.</p>
        ) : (
          <table className="min-w-full bg-white border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Timestamp</th>
                <th className="border border-gray-400 px-4 py-2">IPFS Hash</th>
              </tr>
            </thead>
            <tbody>
              {userIps.map((ip, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    {new Date(Number(ip.timestamp) * 1000).toLocaleString()}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">{ip.ipfsHash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default View;
