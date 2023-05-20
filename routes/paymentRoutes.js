import express from "express";
import {
  checkout,
  paymentVerification,
  login,
  signup,
  transfer,
  getBalance,
  getTransfer,
  getWallet
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.route("/login").post(login);

router.route("/signup").post(signup);

router.route("/transfer").post(transfer);

router.route("/balance/:address").get(getBalance);

router.route("/gettransfers/:regNum").get(getTransfer);

router.route("/getwallet/:regNum").get(getWallet);

export default router;
