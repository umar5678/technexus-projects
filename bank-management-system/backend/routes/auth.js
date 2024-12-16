import express from "express"

const router = express.Router()


import { register, login, logout, verify } from "../controllers/auth.js"
import { verifyToken } from "../middlewares/authMiddlewares.js"
 
router.route("/register").post(register)
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/verify").get(verifyToken, verify)


export default router