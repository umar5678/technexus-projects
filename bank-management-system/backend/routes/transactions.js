import express from "express"
import { verifyToken } from "../middlewares/authMiddlewares.js"
import { getAllTransactions, sendMoney } from "../controllers/transactions.js"

const router = express.Router()

router.route("/").get(verifyToken, getAllTransactions).post(verifyToken, sendMoney)

// api/v1/transactions .get to get all transactions, .post to send money

export default router