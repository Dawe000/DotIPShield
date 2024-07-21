import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useWriteContract } from 'wagmi';
import { TransferABI, transferAddress } from '../Constants/config';

const TransferForm: React.FC = () => {
  const [ipfsHash, setIpfsHash] = useState<string>('');
  const [targetAddress, setTargetAddress] = useState<string>('');

  const { data: hash, writeContract } = useWriteContract() ;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("got to submission");
    console.log(ipfsHash);
    console.log(targetAddress);

    const tx = await writeContract({
        address: transferAddress,
        abi: TransferABI,
        functionName: 'transferIPOwnership',
        args: [ipfsHash, targetAddress],
      });
      console.log("ufudf");
    }
    
    

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Transfer IPFS Ownership</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="ipfsHash" className="block text-sm font-medium text-gray-700">
            IPFS Hash
          </label>
          <input
            id="ipfsHash"
            type="text"
            value={ipfsHash}
            onChange={(e) => setIpfsHash(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="targetAddress" className="block text-sm font-medium text-gray-700">
            Target Address
          </label>
          <input
            id="targetAddress"
            type="text"
            value={targetAddress}
            onChange={(e) => setTargetAddress(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button onClick={handleSubmit}
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
