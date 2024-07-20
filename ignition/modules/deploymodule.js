const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DeployContracts", (m) => {
  // Define the contracts
  const IPRegistration = m.contract("IPRegistration", []);
  const IPTransfer = m.contract("IPTransfer", []);
  const IPVerification = m.contract("IPVerification", []);

  // Deploy the contracts
  m.deploy(IPRegistration, []);
  m.deploy(IPTransfer, []);
  m.deploy(IPVerification, []);

  // Optionally, you can call functions on the deployed contracts
  m.call(IPRegistration, "registerIP", ["0x123..."]); // Example function call
  m.call(IPTransfer, "transferIP", ["0x123...", "0x456..."]); // Example function call
  m.call(IPVerification, "enforceIP", ["0x123..."]); // Example function call

  return {
    IPRegistration,
    IPTransfer,
    IPVerification
  };
});
