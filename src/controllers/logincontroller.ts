import { Request, Response } from 'express';
import { loginservice } from '../services/loginservice';
export const logincontroller = async (req: Request, res: Response) => {
    let data = await loginservice(req, res);
};
