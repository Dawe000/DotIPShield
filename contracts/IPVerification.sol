// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IPRegistration.sol";

contract IPVerification {
    IPRegistration public ipRegistration;

    constructor(address _ipRegistrationAddress) {
        ipRegistration = IPRegistration(_ipRegistrationAddress);
    }

    function verifyIP(string memory ipfsHash) public view returns (bool) {
        IPRegistration.IP memory ip = ipRegistration.getIP(ipfsHash);
        return ip.owner != address(0); // Checks if IP exists
    }

    function getIPDetails(string memory ipfsHash) public view returns (IPRegistration.IP memory) {
        return ipRegistration.getIP(ipfsHash);
    }

    function getAllIPDetails() public view returns (IPRegistration.IP[] memory) {
        return ipRegistration.getAllIPs();
    }
}
