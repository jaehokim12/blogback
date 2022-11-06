import express ,{Request,Response}from 'express'
import  authControllers from '../../controllers'
import auth from '../middleware/auth'
const router = express.Router()

// router.get('/tests',services.servicetest)
router.post('/register', authControllers.registercontroller)
router.get("/test", auth, (req, res) => {

    // console.log('reqmiddlewware',req.body)
    // console.log('reqmiddlewwareres',res)
    res.send("request passed");
  });

export default router