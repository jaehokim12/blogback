import { Request, Response, NextFunction } from 'express';
import * as loginService from '../model/services/login';
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginService.login(req, res);
    } catch (error) {
        res.errored;
    }
    next();
};
