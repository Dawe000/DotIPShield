import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useContractWrite } from 'wagmi';
import { registrationABI, registrationAddress } from '../Constants/config';
import { SecretAPIkey, APIKey } from '../Constants/pinata';
import { NextPage } from 'next';

const pinataApiKey = APIKey; // Replace with your Pinata API Key
const pinataSecretApiKey = SecretAPIkey;

const Home: NextPage = () => {
  const fileInputRef = useRef(null);
  const [ipfsHash, setIpfsHash] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    try {
      const response = await axios.post(url, formData, {
        maxBodyLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data`,
          'pinata_api_key': pinataApiKey,
          'pinata_secret_api_key': pinataSecretApiKey,
        },
      });
      const ipfsHash = response.data.IpfsHash;
      setIpfsHash(ipfsHash);
      writeContract({ 
        address: registrationAddress,
        abi: registrationABI,
        functionName: 'registerIP',
        args: [ipfsHash] 
      });
      setUploadStatus('success');
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
      alert('Error uploading file to IPFS');
      setUploadStatus('error');
    }
  };

  const { data: hash, writeContract } = useContractWrite();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        style={{ display: 'none' }}
      />
      <button
        type="button"
        onClick={handleButtonClick}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
      >
        Upload File
      </button>
      {uploadStatus === 'success' && (
        <p className="mt-4 text-green-500">File uploaded successfully!</p>
      )}
      {uploadStatus === 'error' && (
        <p className="mt-4 text-red-500">Error uploading file.</p>
      )}
    </div>
  );
};

export default Home;
