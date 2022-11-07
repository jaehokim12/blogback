import { Request, Response } from 'express';
import * as service from '../services/loginservice';
export const logincontroller = async (req: Request, res: Response) => {
  let data = await service.loginservice(req, res);
  //     res.status(data.code).json(data.Rowdata);
  //     res.status(200);

  //   res.send
};
