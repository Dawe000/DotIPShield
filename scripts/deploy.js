const { ethers } = require("hardhat");

async function main() {
  // Retrieve the accounts
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Get the nonce for the deployer account
  let nonce = await ethers.provider.getTransactionCount(deployer.address, "latest");

  // Deploy IPRegistration contract
  const IPRegistrationFactory = await ethers.getContractFactory("IPRegistration");
  const ipRegistration = await IPRegistrationFactory.deploy({ nonce: nonce++ });
  console.log("IPRegistration deployed to:", ipRegistration.address);

  // Deploy IPTransfer contract
  const IPTransferFactory = await ethers.getContractFactory("IPTransfer");
  const ipTransfer = await IPTransferFactory.deploy({ nonce: nonce++ });
  console.log("IPTransfer deployed to:", ipTransfer.address);

  // Deploy IPEnforcement contract
  const IPEnforcementFactory = await ethers.getContractFactory("IPEnforcement");
  const ipEnforcement = await IPEnforcementFactory.deploy({ nonce: nonce++ });
  console.log("IPEnforcement deployed to:", ipEnforcement.address);

  // Optionally, you can interact with the contracts after deployment
  // Example: await ipRegistration.registerIP("0x123...");

  return {
    ipRegistration,
    ipTransfer,
    ipEnforcement
  };
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
