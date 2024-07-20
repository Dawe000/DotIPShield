// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPRegistration {
    struct IP {
        address owner;
        uint256 timestamp;
        string ipfsHash;
    }

    mapping(string => IP) private ipRecords;
    IP[] private ipList;

    event IPRegistered(address indexed owner, string ipfsHash);

    function registerIP(string memory ipfsHash) public {
        require(bytes(ipfsHash).length > 0, "IPFS hash cannot be empty");
        require(ipRecords[ipfsHash].owner == address(0), "IP already registered");

        IP memory newIP = IP({
            owner: msg.sender,
            timestamp: block.timestamp,
            ipfsHash: ipfsHash
        });

        ipRecords[ipfsHash] = newIP;
        ipList.push(newIP);

        emit IPRegistered(msg.sender, ipfsHash);
    }

    function getIP(string memory ipfsHash) public view returns (IP memory) {
        require(ipRecords[ipfsHash].owner != address(0), "IP not found");
        return ipRecords[ipfsHash];
    }

    function getAllIPs() public view returns (IP[] memory) {
        return ipList;
    }
}
