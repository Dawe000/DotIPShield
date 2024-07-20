const hre = require("hardhat");

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
  const IPVerificationFactory = await ethers.getContractFactory("IPVerification");
  const ipVerification = await IPVerificationFactory.deploy(ipRegistrationAddress, { nonce: nonce++ });

  console.log("IPVerification deployed to:", ipVerification.getAddress());

  // Optionally, you can interact with the contracts after deployment
  // Example: await ipRegistration.registerIP("0x123...");

  const transferContractAddress = await ipTransfer.getAddress();
  ipRegistration.setTransferContract(transferContractAddress);

  return {
    ipRegistration,
    ipTransfer,
    ipVerification
  };
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
