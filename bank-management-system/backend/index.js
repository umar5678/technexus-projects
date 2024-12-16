import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from "cors"
import connectDB from './db/index.js'
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3001

const app = express()

// middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser())
app.use(cors())


import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js"
import {notFound} from "./middlewares/notFound.js"
import authRouter from "./routes/auth.js"
import healthCheck from "./routes/healthCheck.js"
import userRouter from "./routes/user.js"
import transactionRouter from "./routes/transactions.js"

// routes

// authRouter
// api/v1/auth
// api/vi/auth/register
// api/vi/authlogin
// api/vi/auth/logout

// userRouer
// api/v1/user/feedback  // user can write a feedback review
// api/v1/user/profile
// api/v1/user/account
// api/v1/transactions 

// transactionRouter
// api/v1/transactions/sendmoney // user can see their transactions




app.use("/api/v1", healthCheck)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/transactions", transactionRouter);





app.use(errorHandlerMiddleware)
app.use(notFound)

// app server
const startServer = async () => {
    try {
        await connectDB()   
   app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))     
    } catch (error) {
        console.log(error)
    }
}
  
startServer()