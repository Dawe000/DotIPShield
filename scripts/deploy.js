const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Deploy IPRegistration contract
    const IPRegistration = await hre.ethers.getContractFactory("IPRegistration");
    const ipRegistration = await IPRegistration.deploy();
    await ipRegistration.waitForDeployment();
    console.log("IPRegistration deployed to:", ipRegistration.address);
  
    // Deploy IPTransfer contract
    const IPTransfer = await hre.ethers.getContractFactory("IPTransfer");
    const ipTransfer = await IPTransfer.deploy();
    await ipTransfer.waitForDeployment();
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

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
