import express from 'express'
import { authenticate } from '../middlewares/auth.middleware.js'
import {
  deleteUserProfile,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userProfile.controller.js'

const router = express.Router()

router.patch('/update', authenticate, updateUserProfile)
router.get('/', authenticate, getUserProfile)
router.delete('/delete', authenticate, deleteUserProfile)

export default router
