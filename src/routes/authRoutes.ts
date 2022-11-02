import express from 'express'
import {controllers} from '../controllers/auth/authController'
import * as services from '../services/services'
const router = express.Router()
const Controllers = controllers


router.get('/register',services.serviceOne)


export default router