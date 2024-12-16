import express from 'express'

const router = express.Router()

import { addFeedback } from '../controllers/user.js'
import { verifyToken } from '../middlewares/authMiddlewares.js';

router.route("/feedback").post(verifyToken, addFeedback);

export default router