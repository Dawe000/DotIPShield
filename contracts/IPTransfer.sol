// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IPRegistration.sol";

contract IPTransfer {
    IPRegistration public ipRegistration;

    constructor(address _ipRegistrationAddress) {
        ipRegistration = IPRegistration(_ipRegistrationAddress);
    }

    function transferIPOwnership(string memory ipfsHash, address newOwner) public {
        IPRegistration.IP memory ip = ipRegistration.getIP(ipfsHash);
        require(ip.owner == msg.sender, "Only the current owner can transfer IP");
        require(newOwner != address(0), "New owner address cannot be empty");

        // Update the IP record
        ipRegistration.registerIP(ipfsHash, newOwner); // Re-registers the IP with the new owner
        
    }

}
