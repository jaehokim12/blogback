import express from 'express'
import  authControllers from '../../controllers'
const router = express.Router()

// router.get('/tests',services.servicetest)
router.post('/register', authControllers.registercontroller)
// router.post('/login',authControllers.postregister)

export default router