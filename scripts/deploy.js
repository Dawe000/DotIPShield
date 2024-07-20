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

    // Deploy IPVerification contract
    const IPVerification = await hre.ethers.getContractFactory("IPVerification");
    const ipVerification = await IPVerification.deploy();
    await ipVerification.waitForDeployment();
    console.log("IPVerification deployed to:", ipVerification.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
