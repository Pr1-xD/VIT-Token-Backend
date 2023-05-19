const Token= {
    "_format": "hh-sol-artifact-1",
    "contractName": "Token",
    "sourceName": "contracts/Token.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name_",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol_",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
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
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "_burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "_mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b5060405162001bed38038062001bed8339818101604052810190620000379190620001d4565b81600390805190602001906200004f929190620000b2565b50806004908051906020019062000068929190620000b2565b5033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000378565b828054620000c090620002e4565b90600052602060002090601f016020900481019282620000e4576000855562000130565b82601f10620000ff57805160ff191683800117855562000130565b8280016001018555821562000130579182015b828111156200012f57825182559160200191906001019062000112565b5b5090506200013f919062000143565b5090565b5b808211156200015e57600081600090555060010162000144565b5090565b60006200017962000173846200027b565b62000247565b9050828152602081018484840111156200019257600080fd5b6200019f848285620002ae565b509392505050565b600082601f830112620001b957600080fd5b8151620001cb84826020860162000162565b91505092915050565b60008060408385031215620001e857600080fd5b600083015167ffffffffffffffff8111156200020357600080fd5b6200021185828601620001a7565b925050602083015167ffffffffffffffff8111156200022f57600080fd5b6200023d85828601620001a7565b9150509250929050565b6000604051905081810181811067ffffffffffffffff8211171562000271576200027062000349565b5b8060405250919050565b600067ffffffffffffffff82111562000299576200029862000349565b5b601f19601f8301169050602081019050919050565b60005b83811015620002ce578082015181840152602081019050620002b1565b83811115620002de576000848401525b50505050565b60006002820490506001821680620002fd57607f821691505b602082108114156200031457620003136200031a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61186580620003886000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80634e6ec2471161008c57806395d89b411161006657806395d89b4114610226578063a457c2d714610244578063a9059cbb14610274578063dd62ed3e146102a4576100cf565b80634e6ec247146101be5780636161eb18146101da57806370a08231146101f6576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102d4565b6040516100e991906114ae565b60405180910390f35b61010c60048036038101906101079190611001565b610366565b6040516101199190611493565b60405180910390f35b61012a610389565b6040516101379190611630565b60405180910390f35b61015a60048036038101906101559190610fb2565b610393565b6040516101679190611493565b60405180910390f35b6101786103c2565b604051610185919061164b565b60405180910390f35b6101a860048036038101906101a39190611001565b6103cb565b6040516101b59190611493565b60405180910390f35b6101d860048036038101906101d39190611001565b610402565b005b6101f460048036038101906101ef9190611001565b6105e9565b005b610210600480360381019061020b9190610f4d565b610847565b60405161021d9190611630565b60405180910390f35b61022e61088f565b60405161023b91906114ae565b60405180910390f35b61025e60048036038101906102599190611001565b610921565b60405161026b9190611493565b60405180910390f35b61028e60048036038101906102899190611001565b610998565b60405161029b9190611493565b60405180910390f35b6102be60048036038101906102b99190610f76565b6109bb565b6040516102cb9190611630565b60405180910390f35b6060600380546102e390611760565b80601f016020809104026020016040519081016040528092919081815260200182805461030f90611760565b801561035c5780601f106103315761010080835404028352916020019161035c565b820191906000526020600020905b81548152906001019060200180831161033f57829003601f168201915b5050505050905090565b600080610371610a42565b905061037e818585610a4a565b600191505092915050565b6000600254905090565b60008061039e610a42565b90506103ab858285610c15565b6103b6858585610ca1565b60019150509392505050565b60006012905090565b6000806103d6610a42565b90506103f78185856103e885896109bb565b6103f29190611682565b610a4a565b600191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610472576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046990611610565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f990611570565b60405180910390fd5b61050e60008383610f19565b80600260008282546105209190611682565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105d19190611630565b60405180910390a36105e560008383610f1e565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610659576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065090611590565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e090611570565b60405180910390fd5b6106f582600083610f19565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561077b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610772906114f0565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161082e9190611630565b60405180910390a361084283600084610f1e565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461089e90611760565b80601f01602080910402602001604051908101604052809291908181526020018280546108ca90611760565b80156109175780601f106108ec57610100808354040283529160200191610917565b820191906000526020600020905b8154815290600101906020018083116108fa57829003601f168201915b5050505050905090565b60008061092c610a42565b9050600061093a82866109bb565b90508381101561097f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610976906115f0565b60405180910390fd5b61098c8286868403610a4a565b60019250505092915050565b6000806109a3610a42565b90506109b0818585610ca1565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab1906115d0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2190611510565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c089190611630565b60405180910390a3505050565b6000610c2184846109bb565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c9b5781811015610c8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8490611530565b60405180910390fd5b610c9a8484848403610a4a565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d08906115b0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d78906114d0565b60405180910390fd5b610d8c838383610f19565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0990611550565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f009190611630565b60405180910390a3610f13848484610f1e565b50505050565b505050565b505050565b600081359050610f3281611801565b92915050565b600081359050610f4781611818565b92915050565b600060208284031215610f5f57600080fd5b6000610f6d84828501610f23565b91505092915050565b60008060408385031215610f8957600080fd5b6000610f9785828601610f23565b9250506020610fa885828601610f23565b9150509250929050565b600080600060608486031215610fc757600080fd5b6000610fd586828701610f23565b9350506020610fe686828701610f23565b9250506040610ff786828701610f38565b9150509250925092565b6000806040838503121561101457600080fd5b600061102285828601610f23565b925050602061103385828601610f38565b9150509250929050565b611046816116ea565b82525050565b600061105782611666565b6110618185611671565b935061107181856020860161172d565b61107a816117f0565b840191505092915050565b6000611092602383611671565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006110f8602283611671565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061115e602283611671565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006111c4601d83611671565b91507f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006000830152602082019050919050565b6000611204602683611671565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061126a601183611671565b91507f45524332303a204f776e6572204f6e6c790000000000000000000000000000006000830152602082019050919050565b60006112aa602183611671565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611310602583611671565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611376602483611671565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006113dc602583611671565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611442601f83611671565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b61147e81611716565b82525050565b61148d81611720565b82525050565b60006020820190506114a8600083018461103d565b92915050565b600060208201905081810360008301526114c8818461104c565b905092915050565b600060208201905081810360008301526114e981611085565b9050919050565b60006020820190508181036000830152611509816110eb565b9050919050565b6000602082019050818103600083015261152981611151565b9050919050565b60006020820190508181036000830152611549816111b7565b9050919050565b60006020820190508181036000830152611569816111f7565b9050919050565b600060208201905081810360008301526115898161125d565b9050919050565b600060208201905081810360008301526115a98161129d565b9050919050565b600060208201905081810360008301526115c981611303565b9050919050565b600060208201905081810360008301526115e981611369565b9050919050565b60006020820190508181036000830152611609816113cf565b9050919050565b6000602082019050818103600083015261162981611435565b9050919050565b60006020820190506116456000830184611475565b92915050565b60006020820190506116606000830184611484565b92915050565b600081519050919050565b600082825260208201905092915050565b600061168d82611716565b915061169883611716565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116cd576116cc611792565b5b828201905092915050565b60006116e3826116f6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561174b578082015181840152602081019050611730565b8381111561175a576000848401525b50505050565b6000600282049050600182168061177857607f821691505b6020821081141561178c5761178b6117c1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61180a816116d8565b811461181557600080fd5b50565b61182181611716565b811461182c57600080fd5b5056fea264697066735822122099d6945f8135bda49e28c0fba8d4bea3a3cea3dbb72b939b53620f5eca3dbb9664736f6c63430008000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c80634e6ec2471161008c57806395d89b411161006657806395d89b4114610226578063a457c2d714610244578063a9059cbb14610274578063dd62ed3e146102a4576100cf565b80634e6ec247146101be5780636161eb18146101da57806370a08231146101f6576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102d4565b6040516100e991906114ae565b60405180910390f35b61010c60048036038101906101079190611001565b610366565b6040516101199190611493565b60405180910390f35b61012a610389565b6040516101379190611630565b60405180910390f35b61015a60048036038101906101559190610fb2565b610393565b6040516101679190611493565b60405180910390f35b6101786103c2565b604051610185919061164b565b60405180910390f35b6101a860048036038101906101a39190611001565b6103cb565b6040516101b59190611493565b60405180910390f35b6101d860048036038101906101d39190611001565b610402565b005b6101f460048036038101906101ef9190611001565b6105e9565b005b610210600480360381019061020b9190610f4d565b610847565b60405161021d9190611630565b60405180910390f35b61022e61088f565b60405161023b91906114ae565b60405180910390f35b61025e60048036038101906102599190611001565b610921565b60405161026b9190611493565b60405180910390f35b61028e60048036038101906102899190611001565b610998565b60405161029b9190611493565b60405180910390f35b6102be60048036038101906102b99190610f76565b6109bb565b6040516102cb9190611630565b60405180910390f35b6060600380546102e390611760565b80601f016020809104026020016040519081016040528092919081815260200182805461030f90611760565b801561035c5780601f106103315761010080835404028352916020019161035c565b820191906000526020600020905b81548152906001019060200180831161033f57829003601f168201915b5050505050905090565b600080610371610a42565b905061037e818585610a4a565b600191505092915050565b6000600254905090565b60008061039e610a42565b90506103ab858285610c15565b6103b6858585610ca1565b60019150509392505050565b60006012905090565b6000806103d6610a42565b90506103f78185856103e885896109bb565b6103f29190611682565b610a4a565b600191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610472576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046990611610565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f990611570565b60405180910390fd5b61050e60008383610f19565b80600260008282546105209190611682565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105d19190611630565b60405180910390a36105e560008383610f1e565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610659576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065090611590565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e090611570565b60405180910390fd5b6106f582600083610f19565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561077b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610772906114f0565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161082e9190611630565b60405180910390a361084283600084610f1e565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461089e90611760565b80601f01602080910402602001604051908101604052809291908181526020018280546108ca90611760565b80156109175780601f106108ec57610100808354040283529160200191610917565b820191906000526020600020905b8154815290600101906020018083116108fa57829003601f168201915b5050505050905090565b60008061092c610a42565b9050600061093a82866109bb565b90508381101561097f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610976906115f0565b60405180910390fd5b61098c8286868403610a4a565b60019250505092915050565b6000806109a3610a42565b90506109b0818585610ca1565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab1906115d0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2190611510565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c089190611630565b60405180910390a3505050565b6000610c2184846109bb565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c9b5781811015610c8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8490611530565b60405180910390fd5b610c9a8484848403610a4a565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d08906115b0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d78906114d0565b60405180910390fd5b610d8c838383610f19565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0990611550565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f009190611630565b60405180910390a3610f13848484610f1e565b50505050565b505050565b505050565b600081359050610f3281611801565b92915050565b600081359050610f4781611818565b92915050565b600060208284031215610f5f57600080fd5b6000610f6d84828501610f23565b91505092915050565b60008060408385031215610f8957600080fd5b6000610f9785828601610f23565b9250506020610fa885828601610f23565b9150509250929050565b600080600060608486031215610fc757600080fd5b6000610fd586828701610f23565b9350506020610fe686828701610f23565b9250506040610ff786828701610f38565b9150509250925092565b6000806040838503121561101457600080fd5b600061102285828601610f23565b925050602061103385828601610f38565b9150509250929050565b611046816116ea565b82525050565b600061105782611666565b6110618185611671565b935061107181856020860161172d565b61107a816117f0565b840191505092915050565b6000611092602383611671565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006110f8602283611671565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061115e602283611671565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006111c4601d83611671565b91507f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006000830152602082019050919050565b6000611204602683611671565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061126a601183611671565b91507f45524332303a204f776e6572204f6e6c790000000000000000000000000000006000830152602082019050919050565b60006112aa602183611671565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611310602583611671565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611376602483611671565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006113dc602583611671565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611442601f83611671565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b61147e81611716565b82525050565b61148d81611720565b82525050565b60006020820190506114a8600083018461103d565b92915050565b600060208201905081810360008301526114c8818461104c565b905092915050565b600060208201905081810360008301526114e981611085565b9050919050565b60006020820190508181036000830152611509816110eb565b9050919050565b6000602082019050818103600083015261152981611151565b9050919050565b60006020820190508181036000830152611549816111b7565b9050919050565b60006020820190508181036000830152611569816111f7565b9050919050565b600060208201905081810360008301526115898161125d565b9050919050565b600060208201905081810360008301526115a98161129d565b9050919050565b600060208201905081810360008301526115c981611303565b9050919050565b600060208201905081810360008301526115e981611369565b9050919050565b60006020820190508181036000830152611609816113cf565b9050919050565b6000602082019050818103600083015261162981611435565b9050919050565b60006020820190506116456000830184611475565b92915050565b60006020820190506116606000830184611484565b92915050565b600081519050919050565b600082825260208201905092915050565b600061168d82611716565b915061169883611716565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116cd576116cc611792565b5b828201905092915050565b60006116e3826116f6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561174b578082015181840152602081019050611730565b8381111561175a576000848401525b50505050565b6000600282049050600182168061177857607f821691505b6020821081141561178c5761178b6117c1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61180a816116d8565b811461181557600080fd5b50565b61182181611716565b811461182c57600080fd5b5056fea264697066735822122099d6945f8135bda49e28c0fba8d4bea3a3cea3dbb72b939b53620f5eca3dbb9664736f6c63430008000033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  
  export default Token

