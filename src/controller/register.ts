import { NextFunction, Request, Response } from 'express';
import * as registerService from '../model/services/register';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await registerService.register(req, res);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
    next();
};
