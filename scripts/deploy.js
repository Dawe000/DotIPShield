const { ethers } = require("hardhat");
//test hello
async function main() {
  // Retrieve the accounts
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Get the nonce for the deployer account
  let nonce = await ethers.provider.getTransactionCount(deployer.address, "latest");

  // Deploy IPRegistration contract



  const ipRegistration = await IPRegistrationFactory.deploy({ nonce: nonce++ });

  const ipRegistrationAddress = await ipRegistration.getAddress();
  console.log("IPRegistration deployed to:", ipRegistrationAddress);


  // Deploy IPTransfer contract
  const IPTransferFactory = await ethers.getContractFactory("IPTransfer");
  const ipTransfer = await IPTransferFactory.deploy(ipRegistrationAddress, { nonce: nonce++ });

  const transferContractAddress = await ipTransfer.getAddress();

  console.log("IPTransfer deployed to:", transferContractAddress);

  // Deploy IPEnforcement contract
  const IPVerificationFactory = await ethers.getContractFactory("IPVerification");
  const ipVerification = await IPVerificationFactory.deploy(ipRegistrationAddress, { nonce: nonce++ });

  console.log("IPVerification deployed to:", ipVerification.getAddress());

  // Optionally, you can interact with the contracts after deployment
  // Example: await ipRegistration.registerIP("0x123...");

  
  ipRegistration.setTransferContract(transferContractAddress);

  return {
    ipRegistration,
    ipTransfer,
    ipVerification
  };
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
