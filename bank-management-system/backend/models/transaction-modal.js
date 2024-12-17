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
  transactionType: {
    type: String,
    enum: ["send", "receive"]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    
 }
} , {timestamps: true});

export const Transaction = mongoose.model("Trancsaction", transferSchema);
