require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); 
require("@nomicfoundation/hardhat-ignition-ethers");


module.exports = {
  solidity: "0.8.24",
  networks: {
    moonbase: {
      url: process.env.MOONBEAM_RPC_URL || 'https://rpc.api.moonbase.moonbeam.network',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || 'YOUR_ETHERSCAN_API_KEY', // Optional, for contract verification
  },
};
