var Web3 = require('web3');
var web3 = new Web3('https://ropsten.infura.io/v3/d92fd0d900fc4b85bf4090eb5478ba41');
var Tx = require('ethereumjs-tx').Transaction;
// console.log(web3.eth.accounts.create());

// web3.eth.getBalance("0x8D57B9846bBE7347b7e44dC6198289Caa273Ed63", (error, result)=>{
//     console.log(web3.utils.fromWei(result,'ether'));
// });

var myAddress = "0x8D57B9846bBE7347b7e44dC6198289Caa273Ed63";
var privateKey = Buffer.from("94d040e9f8d5f1cd654eb410447dc436b2334e32dedbd920fec3bd4519794c85", "hex");

var address2  = "0x518668A2877e729e541f98F3018C2855019A78c9";
var ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "To",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
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
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "To",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "TotalSupply",
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
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
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
				"name": "_address",
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
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
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
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
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
];
var contractAddress = "0x700558b93ca166e644e5a23932ebdcce12e44bfd";

var contract =  new web3.eth.Contract(ABI, contractAddress);

// console.log(contract);

// contract.methods.TotalSupply().call((err,res)=>{
//     console.log(res);
// });

// contract.methods.balanceOf("0x8D57B9846bBE7347b7e44dC6198289Caa273Ed63").call((err,res)=>{
//     console.log(res);
// });

// web3.eth.getTransactionCount(myAddress, (err,txcount)=>{
//     var txObject = {
//         nonce: txcount,
//         gasPrice: web3.utils.toHex(2100000),
//         gasLimit: web3.utils.toHex(web3.utils.toWei('100','gwei')),
//         to: address2,
//         value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
//     }

//     const tx = new Tx(txObject, {chain: 'ropsten'})

//     tx.sign(privateKey);
// })

web3.eth.getTransactionCount(myAddress, (err,txcount)=>{
    var data = contract.methods.transfer(address2, web3.utils.fromWei('1000', 'ether')).encodeABI();
    var txObject = {
        nonce: eb3.utils.toHex(txcount),
        gasPrice: web3.utils.toHex(2100000),
        gasLimit: web3.utils.toHex(web3.utils.toWei('100','gwei')),
        to: contractAddress,
        data: data,
    }

    const tx = new Tx(txObject, {chain: 'ropsten'})

    tx.sign(privateKey);
})
