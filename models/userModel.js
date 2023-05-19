import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  registeration_number: {
    type: String,
    required: true,
  },
  wallet_address: {
    type: String,
    required: true,
  },
  private_key: {
    type: String,
    required: true,
  },
  security_pin: {
    type: Number,
    required: true,
  }
});

export const User = mongoose.model("User", userSchema);
