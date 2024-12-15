import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from "cors"
import connectDB from './db/index.js'

const PORT = process.env.PORT || 3000

const app = express()

// middlewares

app.use(express.json())
app.use(cors())

// routes




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