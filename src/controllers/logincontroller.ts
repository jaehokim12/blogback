import { Request, Response, NextFunction } from 'express';
import { loginService } from '../services/loginservice';
export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginService(req, res);
    } catch (error) {
        res.errored;
    }
    next();
};
