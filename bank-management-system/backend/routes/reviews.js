import express from "express";

const router = express.Router();

import { addReview, getAllReviews } from "../controllers/reviews.js";
import { verifyToken } from "../middlewares/authMiddlewares.js";

router.route("/").get(getAllReviews).post(verifyToken, addReview);

// api/v1/reviews .get to get all reiews , .post to add a review

export default router;
