import React, { useRef, useState } from 'react';
import pinataSDK from '@pinata/sdk';
import {SecretAPIkey, APIKey} from '../Constants/pinata';
import axios from 'axios';

const pinataApiKey = APIKey; // Replace with your Pinata API Key
const pinataSecretApiKey = SecretAPIkey; //


const UploadButton = () => {
    const fileInputRef = useRef(null);
    const [ipfsHash, setIpfsHash] = useState(null);
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleUpload = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      const formData = new FormData();
      formData.append('file', file);
  
      const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  
      try {
        const response = await axios.post(url, formData, {
          maxBodyLength: 'Infinity',
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
          },
        });
        setIpfsHash(response.data.IpfsHash);
        alert(`File uploaded to IPFS with hash: ${response.data.IpfsHash}`);
      } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        alert('Error uploading file to IPFS');
      }
    };
  
    return (
      <div>
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
        {ipfsHash && (
          <div>
            <p>File uploaded to IPFS with hash: {ipfsHash}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default UploadButton;