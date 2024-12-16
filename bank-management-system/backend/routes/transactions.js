import express from "express"
import { verifyToken } from "../middlewares/authMiddlewares"
import { getAllTransactions, sendMoney } from "../controllers/transactions"

const router = express.Router()

router.route("/transactions").get(verifyToken, getAllTransactions).post(verifyToken, sendMoney)


export default router