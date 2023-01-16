import * as database from '../../database';
import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as registerDao from '../dao/register';
import * as IUserType from '../../interfaces/IUser';
import { statusCode } from '../../interfaces/IStatus';
import config from '../../config';
export const register = async (req: Request, res: Response) => {
    try {
        const { name, mail, password } = req.body as IUserType.UserInfo; // front dataType

        // 1. check req.user.email = db.user.email
        // 1.1 if req.user.email = db.user.email // send status code and end
        let userExist = await registerDao.findUser(mail);
        console.log('userExist:::', userExist);
        if (userExist) {
            return res.status(200).send('already email exist');
        }
        // 2.if req.user.email != db.user.email // keep going process
        // 2.1  hash req.user.email
        const encryptedPassword = await hash(password, 10);
        // 2.2  insert req.userdata to db.userdata = {name,email,encrptedpassword}
        let result: IUserType.DbUserData = await registerDao.InsertUser({ name, mail, encryptedPassword });

        const token = jwt.sign(
            {
                id: name,
                mail,
            },

            config.tokenkey,

            {
                expiresIn: '24h',
            },
        );
        let userData: IUserType.UserData;
        userData = {
            name: name,
            mail: mail,
            token: token,
        };
        // 2.3 after insert req.userdata to db.userdata send token with userinfo
        return res.status(200).send(userData);
    } catch {
        // 3. if occur error process this block,
        // send to user error status code and message data
        return res.status(500).send('Something went wrong. Please try again');
    }
};
