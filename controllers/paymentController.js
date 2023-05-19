import { instance } from "../server.js";
import crypto, { setEngine } from "crypto";
import Token from '../contracts/Token.js';
import { ethers } from "ethers";
import { Payment } from "../models/paymentModel.js";

const TOKEN_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  await setBalance(Number(req.body.amount * 100))

  res.status(200).json({
    success: true,
    order,
  });
};

async function setBalance(newBalance) {
  if (newBalance>0) {
      let url = "http://127.0.0.1:8545/";
      let provider = new ethers.providers.JsonRpcProvider(url);

      //signer needed for transaction that changes state
      const signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
      console.log(signer)
      const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, signer);

      //preform transaction
      const transaction = await contract._mint(signer.getAddress(),newBalance);
      await transaction.wait();
      // fetchBalance();
  }
}

const transfer = async (razorpay_payment_id) => {

  //fetch amount
  //fetch account ID from DB based on wallet address

  const payment = await instance.payments.transfer(razorpay_payment_id,{
    "transfers": [
     {
       "account": 'LrJPGuA1POTXrl',   //fetch from DB
       "amount": 100,   //have to fetch amount probably
       "currency": "INR",
     }
   ]
  })

  console.log(payment)
};

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
      'http://127.0.0.1:5173/'
      // `http://127.0.0.1:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
