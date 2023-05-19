import express from "express";
import {
  checkout,
  paymentVerification,
  login,
  signup
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.route("/login").post(login);

router.route("/signup").post(signup);

export default router;
