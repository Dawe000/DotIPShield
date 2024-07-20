async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const IPRegistration = await ethers.getContractFactory("IPRegistration");
    const ipRegistration = await IPRegistration.deploy();
    await ipRegistration.deployed();
    console.log("IPRegistration deployed to:", ipRegistration.address);
  
    const IPVerification = await ethers.getContractFactory("IPVerification");
    const ipVerification = await IPVerification.deploy();
    await ipVerification.deployed();
    console.log("IPVerification deployed to:", ipVerification.address);
  
    const IPTransfer = await ethers.getContractFactory("IPTransfer");
    const ipTransfer = await IPTransfer.deploy(ipRegistration.address);
    await ipTransfer.deployed();
    console.log("IPTransfer deployed to:", ipTransfer.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  