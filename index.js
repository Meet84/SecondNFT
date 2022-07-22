document.addEventListener("DOMContentLoaded", () => {
	const web3 = new Web3(window.ethereum)
	 const nftcontractaddress= "0x004BCA13ba94339129730326e46F79cb9f175C6F";
	 const nftcontractabi = 
	 
	  [
		  {
		  "inputs": [],
		  "stateMutability": "nonpayable",
		  "type": "constructor"
	  },
	  {
		  "anonymous": false,
		  "inputs": [
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "_owner",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "_approved",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "uint256",
				  "name": "_tokenId",
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
				  "name": "_owner",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "_operator",
				  "type": "address"
			  },
			  {
				  "indexed": false,
				  "internalType": "bool",
				  "name": "_approved",
				  "type": "bool"
			  }
		  ],
		  "name": "ApprovalForAll",
		  "type": "event"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "_approved",
				  "type": "address"
			  },
			  {
				  "internalType": "uint256",
				  "name": "_tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "approve",
		  "outputs": [],
		  "stateMutability": "nonpayable",
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
				  "name": "_tokenId",
				  "type": "uint256"
			  },
			  {
				  "internalType": "string",
				  "name": "_uri",
				  "type": "string"
			  }
		  ],
		  "name": "mint",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "anonymous": false,
		  "inputs": [
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "previousOwner",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "newOwner",
				  "type": "address"
			  }
		  ],
		  "name": "OwnershipTransferred",
		  "type": "event"
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
				  "name": "_tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "safeTransferFrom",
		  "outputs": [],
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
				  "name": "_tokenId",
				  "type": "uint256"
			  },
			  {
				  "internalType": "bytes",
				  "name": "_data",
				  "type": "bytes"
			  }
		  ],
		  "name": "safeTransferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "_operator",
				  "type": "address"
			  },
			  {
				  "internalType": "bool",
				  "name": "_approved",
				  "type": "bool"
			  }
		  ],
		  "name": "setApprovalForAll",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "anonymous": false,
		  "inputs": [
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "_from",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "address",
				  "name": "_to",
				  "type": "address"
			  },
			  {
				  "indexed": true,
				  "internalType": "uint256",
				  "name": "_tokenId",
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
				  "name": "_tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "transferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "_newOwner",
				  "type": "address"
			  }
		  ],
		  "name": "transferOwnership",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "address",
				  "name": "_owner",
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
		  "name": "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
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
		  "inputs": [
			  {
				  "internalType": "uint256",
				  "name": "_tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "getApproved",
		  "outputs": [
			  {
				  "internalType": "address",
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
				  "internalType": "address",
				  "name": "_owner",
				  "type": "address"
			  },
			  {
				  "internalType": "address",
				  "name": "_operator",
				  "type": "address"
			  }
		  ],
		  "name": "isApprovedForAll",
		  "outputs": [
			  {
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
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
				  "name": "_name",
				  "type": "string"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [],
		  "name": "NOT_CURRENT_OWNER",
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
		  "name": "owner",
		  "outputs": [
			  {
				  "internalType": "address",
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
				  "internalType": "uint256",
				  "name": "_tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "ownerOf",
		  "outputs": [
			  {
				  "internalType": "address",
				  "name": "_owner",
				  "type": "address"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "bytes4",
				  "name": "_interfaceID",
				  "type": "bytes4"
			  }
		  ],
		  "name": "supportsInterface",
		  "outputs": [
			  {
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
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
				  "name": "_symbol",
				  "type": "string"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  },
	  {
		  "inputs": [
			  {
				  "internalType": "uint256",
				  "name": "_tokenId",
				  "type": "uint256"
			  }
		  ],
		  "name": "tokenURI",
		  "outputs": [
			  {
				  "internalType": "string",
				  "name": "",
				  "type": "string"
			  }
		  ],
		  "stateMutability": "view",
		  "type": "function"
	  }
  
	  
	  
	  
  ]
   const contract = new web3.eth.Contract(nftcontractabi, nftcontractaddress)
	document.getElementById("load_button").addEventListener("click", async () => {
	 
	  const wallet_addr = document.getElementById("wallet_address").value
	  console.log(wallet_addr);
	  let tokenMetadataURI = await contract.methods.tokenURI(3).call({from:wallet_addr})
	  console.log(tokenMetadataURI);
	  const TokenElement = document.getElementById("nft_template").content.cloneNode(true)
	  TokenElement.querySelector("img").src = tokenMetadataURI;//"https://ipfs.io/ipfs/bafybeidhnudonz6wtl57kniamvxcfqy5z52h4boq6kw5hjgi4snzi5rnoy"
	  document.body.appendChild(TokenElement);
	 })
	  
	  document.getElementById("nft_data").addEventListener("click",myfunction);
	  function myfunction() {
	   const wallet_addr = document.getElementById("wallet_address").value
	   const nft_nam = document.getElementById("name");
	   const sym = document.getElementById("symbol");
	   contract.methods.name().call({from:wallet_addr}).then((result) => {
	   console.log(result);
	   nft_nam.innerHTML='NFT name = ' + result + ' /  ';
	  });
			  
	  contract.methods.symbol().call({from:wallet_addr}).then((result) => {
	  console.log(result);
	  sym.innerHTML='NFT Symbol = ' + result;
	   });
	  }
  })
  
  
	  

	
