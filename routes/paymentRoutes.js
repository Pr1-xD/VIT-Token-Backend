import express from "express";
import {
  checkout,
  paymentVerification,
  login,
  signup,
  transfer,
  getBalance
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.route("/login").post(login);

router.route("/signup").post(signup);

router.route("/transfer").post(transfer);

router.route("/balance/:address").get(getBalance);

export default router;
