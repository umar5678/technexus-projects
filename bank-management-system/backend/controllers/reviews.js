import { User } from "../models/user-model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Review } from "../models/review-model.js";

const addReview = asyncHandler(async (req, res, next) => {
  // get review details from req.body
  // check if review already exist
  // create review in db
  // check if review is created or not
  // add review id to user reviews array
  // send review data in response
  const { review, company, name } = req.body;

  if (review === "") throw new ApiError(400, "Review message is required");

  const user = await User.findById(req.user._id).select("-password");


  if (!user) throw new ApiError(400, "user not found");

  const newReview = await Review.create({
    user: req.user._id,
    review,
    company,
    name,
  });

  if (!newReview) throw new ApiError(400, "Review not created");

  user.reviews.push(newReview._id);
  await user.save();

  return res.status(201).json(new ApiResponse(201, "review added"));
});

const getAllReviews = asyncHandler(async (req, res, next) => {
  const allReviews = await Review.find({}).sort({ createdAt: -1 }).limit(4);

  if (!allReviews) throw new ApiError(404, "reviews not found");

  return res.status(200).json(new ApiResponse(200, allReviews));
});

export { addReview, getAllReviews };
