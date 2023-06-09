import { instance } from "../server.js";
import crypto, { setEngine } from "crypto";
import Token from '../contracts/Token.js';
import { ethers } from "ethers";
import { getLeaf,getProof,verify } from "./merkle.js";

import { Transfer } from "../models/transferModel.js";
import { User } from "../models/userModel.js";
import { Promo } from "../models/promoModel.js";

const TOKEN_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const checkout = async (req, res) => {
  console.log(req)
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  await setBalance(req.body.walletAddress,Number(req.body.amount ))

  res.status(200).json({
    success: true,
    order,
  });
};

async function setBalance(walletAddress,newBalance) {
  if (newBalance>0) {
      let url = "http://127.0.0.1:8545/";
      let provider = new ethers.providers.JsonRpcProvider(url);

      //signer needed for transaction that changes state
      const signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
      console.log(signer)
      const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, signer);

      //preform transaction
      const transaction = await contract._mint(walletAddress,newBalance);
      await transaction.wait();
      console.log(transaction.body)
      // fetchBalance();
  }
}

export const login = async (req, res) => {

  let userData = await User.findOne({registeration_number:req.body.registeration_number})

  if(userData){
    if( userData.security_pin == req.body.security_pin)
    {
      res.status(200).json({
      success: true,
      userData: userData
      });
    }
   else
    {
      res.status(200).json({
        success: false
        });
    } 
  }
  else
  {
      res.status(200).json({
        success: false
        });
    } 

  

};

export const transfer = async (req, res) => {

  let userData = await User.findOne({registeration_number:req.body.registeration_number})

  let recieverData = await User.findOne({registeration_number:req.body.rec_registeration_number})

  if( userData.security_pin == req.body.security_pin)
    {

      let promoCheck = await Promo.findOne({wallet_address:userData.wallet_address})
      if(promoCheck)
      {
        console.log("Promo available")
        await giveCashback(userData.wallet_address,req.body.amount)
      }

      try{
        let url = "http://127.0.0.1:8545/";
      let provider = new ethers.providers.JsonRpcProvider(url);

      //signer needed for transaction that changes state
      const signer = new ethers.Wallet(userData.private_key, provider);
      console.log(signer)
      const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, signer);

      //preform transaction
      console.log(recieverData.wallet_address)
      const transaction = await contract.transfer(recieverData.wallet_address,req.body.amount);
      await transaction.wait();
      console.log(transaction)
      // fetchBalance();

      let txData = new Transfer({
        registeration_number: req.body.registeration_number,
        rec_registeration_number: req.body.rec_registeration_number,
        amount: req.body.amount
      })

      const txAdded = await txData.save()
      console.log(txAdded)

      res.status(200).json({
      success: true
      });
      }
      catch(err){
        res.status(500).json({
          success: false,
          error:err
          });
      }
      
    }
   else
    {
      res.status(500).json({
        success: false,
        error:"Wrong PIN"
        });
    } 

};

async function giveCashback(walletAddress,amount){
  const leaf = await getLeaf(walletAddress)
  const proof = await getProof(leaf)
  const root = await getRoot()
  if(walletAddress)
  { 
    console.log("minting")
    let url = "http://127.0.0.1:8545/";
      let provider = new ethers.providers.JsonRpcProvider(url);

      //signer needed for transaction that changes state
      const signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
      console.log(signer)
      const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, signer);

      //preform transaction
      const transaction = await contract._mint(walletAddress,amount*0.1);
      await transaction.wait();
      console.log(transaction.body)
  }
}

export const signup = async (req, res) => {

  let userData = new User ({
    registeration_number: req.body.registeration_number,
    wallet_address: req.body.wallet_address,
    private_key: req.body.private_key,
    security_pin: req.body.security_pin
  })

  try{

    let url = "http://127.0.0.1:8545/";
      let provider = new ethers.providers.JsonRpcProvider(url);

      //signer needed for transaction that changes state
      const signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
      console.log(signer)

      let tx = {
        to: req.body.wallet_address,
        // Convert currency unit from ether to wei
        value: ethers.utils.parseEther('1')
    }
    // Send a transaction
    signer.sendTransaction(tx)
    .then((txObj) => {console.log('txHash', txObj.hash)})

    const userCreated = await userData.save()
    console.log(userCreated)
    res.status(200).json({
      success: true,
      userData: userCreated
      });
  }
  catch(err){
    console.log(err)
    res.status(500).json({
      success: false,
      error: err
      });
  }

};

export const addPromo = async (req, res) => {

  try{
    let promoData = new Promo ({
    wallet_address: req.body.wallet_address,
    amount: req.body.amount
  })
    const promoCreated = await promoData.save()
    console.log(promoCreated)
    res.status(200).json({
      success: true,
      data: promoCreated
      });
  }
  catch(err){
    console.log(err)
    res.status(500).json({
      success: false,
      error: err
      });
  }

};



const getRoot = async () => {
      let url = "http://127.0.0.1:8545/";
      let provider = new ethers.providers.JsonRpcProvider(url);

      //signer needed for transaction that changes state
      const signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
      console.log(signer)
      const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, signer);

      try {
        let data = await contract.root();

        console.log("root:"+data)
        return data

    } catch (e) {
        console.log("Err: ", e)
    }
  }

export const getBalance = async (req, res) => {
  if (req.params.address) {
      let url = "http://127.0.0.1:8545/";
      let provider = new ethers.providers.JsonRpcProvider(url);

      //signer needed for transaction that changes state
      const signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
      console.log(signer)
      const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, signer);

      try {
        let data = await contract.balanceOf(req.params.address);
        data=parseInt(data)
        console.log(data)

        res.status(200).json({
          success: true,
          balance: data
          });

    } catch (e) {
        console.log("Err: ", e)
    }
  }
}

export const getTransfer = async (req, res) => {
  if (req.params.regNum) {
      let txData = await Transfer.find({$or:[{registeration_number:req.params.regNum},{rec_registeration_number:req.params.regNum}]})
       if(txData)
       {
        res.status(200).json({
          success: true,
          txData: txData
          });
       }
  }
}

export const getWallet = async (req, res) => {
  if (req.params.regNum) {
      let userData = await User.find({registeration_number:req.params.regNum})
      console.log(userData)
       if(userData)
       {
        res.status(200).json({
          success: true,
          data: userData
          });
       }
  }
}

// const transfer = async (razorpay_payment_id) => {

//   //fetch amount
//   //fetch account ID from DB based on wallet address

//   const payment = await instance.payments.transfer(razorpay_payment_id,{
//     "transfers": [
//      {
//        "account": 'LrJPGuA1POTXrl',   //fetch from DB
//        "amount": 100,   //have to fetch amount probably
//        "currency": "INR",
//      }
//    ]
//   })

//   console.log(payment)
// };

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {

    //call transfer function with payment id
    //mint function comes here (import it from another file if possible)
    //await with try and catch, if err res status 400 with err

    res.redirect(
      'http://127.0.0.1:5173/addbalance'
      // `http://127.0.0.1:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
