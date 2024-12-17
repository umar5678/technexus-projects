import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3001;
const clientOrigin = process.env.CLIENT_ORIGIN;

const app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: clientOrigin,
    credentials: true,
  })
);

import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { notFound } from "./middlewares/notFound.js";
import authRouter from "./routes/auth.js";
import healthCheck from "./routes/healthCheck.js";
import reviewsRouter from "./routes/reviews.js";
import transactionRouter from "./routes/transactions.js";

// routes

app.use("/api/v1", healthCheck);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/reviews", reviewsRouter);
app.use("/api/v1/transactions", transactionRouter);

app.use(errorHandlerMiddleware);
app.use(notFound);

// app server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
