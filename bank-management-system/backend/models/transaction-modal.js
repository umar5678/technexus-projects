import mongoose, { Schema } from "mongoose";

const transferSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  senderAccountNumber: {
    type: String,
    required: true,
  },
  receiverAccountNumber: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
} , {timestamps: true});

export const Transaction = mongoose.model("Trancsaction", transferSchema);
