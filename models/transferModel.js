import mongoose from "mongoose";

const txSchema = new mongoose.Schema({
  registeration_number: {
    type: String,
    required: true,
  },
  rec_registeration_number: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  }
});

export const Transfer = mongoose.model("Transfer", txSchema);