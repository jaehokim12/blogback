import { Request, Response } from 'express';
import * as service from '../services/registerservice';

interface UserInfo {
    username: string;
    mail: string;
    password: string;
    token?: string;
}
interface QueryResult {
    code: number;
    Rowdata: string;
}

export const registercontroller = async (req: Request, res: Response) => {
    try {
        let data;
        //  data = await service.registerservice(req.body as UserInfo)
        data = await service.registerservice(req.body as UserInfo);
        // userinfo => return => token
        res.status(data.code).json(data.Rowdata);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
};
