import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    review: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);
