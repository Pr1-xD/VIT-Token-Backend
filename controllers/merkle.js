import{ MerkleTree } from 'merkletreejs'
import keccak256 from "keccak256" 
import { ethers } from "ethers";
import Web3EthAbi from 'web3-eth-abi'


const leaves = [
    ["0x32A773B13cDd4484B487bF05cE7D1de78F942931"]
  ].map(x => ethers.utils.solidityKeccak256(["address"], x))

  console.log(keccak256(Web3EthAbi.encodeParameters(
    ['address'],
    ['0x32A773B13cDd4484B487bF05cE7D1de78F942931']
  )).toString('hex'))

const tree = new MerkleTree(leaves,keccak256,{sort:true})
const root = tree.getHexRoot()
console.log("Root:");
console.log(root)  

const leaf = getLeaf("0x32A773B13cDd4484B487bF05cE7D1de78F942931")
const proof = getProof(leaf)
verify(leaf,proof,root)

export function getLeaf(address)
{
    const leaf = ethers.utils.solidityKeccak256(["address"], [address])
    console.log("Leaf:");
    console.log(leaf.toString('hex'))
    return leaf.toString('hex')
}


export function getProof(leaf)
{
    

    // console.log("Hash:");
    // const addressHash=ethers.utils.solidityKeccak256(["address"], ["0x15412D1f9C63e9123Fa62a3E385a130f5C959De5"])
    // console.log(addressHash);

    const proof = tree.getProof(leaf)
    const hexproof = tree.getHexProof(leaf)
    console.log("Proof:");
    console.log(hexproof)
    return proof
}



export function verify(leaf,proof,root)
{   


    console.log(tree.verify(proof, leaf, root)) // true

    console.log(tree.toString())
}

