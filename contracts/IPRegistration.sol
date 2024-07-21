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

    address transferContractAddress;

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

    function registerIP(string memory ipfsHash, address newOwner) public {
        require(msg.sender == transferContractAddress, "Transfer must originate from transfer contract");

        IP memory newIP = IP({
            owner: newOwner,
            timestamp: block.timestamp,
            ipfsHash: ipfsHash
        });

        ipRecords[ipfsHash] = newIP;
        ipList.push(newIP);

        emit IPRegistered(msg.sender, ipfsHash);
    }

    function setTransferContract(address newTransferContractAddress) public {
        require(transferContractAddress == address(0), "Only one transfer contract can be used");

        transferContractAddress = newTransferContractAddress;
    }

    function getIP(string memory ipfsHash) public view returns (IP memory) {
        require(ipRecords[ipfsHash].owner != address(0), "IP not found");
        return ipRecords[ipfsHash];
    }

    function getAllIPs() public view returns (IP[] memory) {
        return ipList;
    }
}
