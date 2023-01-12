import express, { Request, Response } from 'express';
import * as loginController from '../../controller/login';
import * as registerController from '../../controller/register';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/test', auth, (req, res) => {
    res.send('request passed');
});

export default router;
