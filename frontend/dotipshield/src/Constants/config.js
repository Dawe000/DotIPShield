export const registrationAddress = '0x79c83BB052FFea03e27233762784d2030Ae219FE';
export const transferAddress =     '0xA68e9843aae7143f0e079A0630295571E2768b1A';
//export const verificationAddress = ;

export const registrationABI = [
    {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "ipfsHash",
            "type": "string"
          }
        ],
        "name": "IPRegistered",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "getAllIPs",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "ipfsHash",
                "type": "string"
              }
            ],
            "internalType": "struct IPRegistration.IP[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "ipfsHash",
            "type": "string"
          }
        ],
        "name": "getIP",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "ipfsHash",
                "type": "string"
              }
            ],
            "internalType": "struct IPRegistration.IP",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "ipfsHash",
            "type": "string"
          }
        ],
        "name": "registerIP",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newTransferContractAddress",
            "type": "address"
          }
        ],
        "name": "setTransferContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
];

export const TransferABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ipRegistrationAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ipRegistration",
      "outputs": [
        {
          "internalType": "contract IPRegistration",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferIPOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

export const VerificationABI = [[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ipRegistrationAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ipRegistration",
      "outputs": [
        {
          "internalType": "contract IPRegistration",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferIPOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]]