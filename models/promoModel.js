import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
  wallet_address: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  }
});

export const Promo = mongoose.model("Promo", promoSchema);