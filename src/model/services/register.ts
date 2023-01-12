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
        const { username, mail, password } = req.body as IUserType.userInfo; // front dataType
        let userExist = await registerDao.register({ mail });
        if (userExist) {
            return res.status(200).send('already email exist');
        }
        const encryptedPassword = await hash(password, 10);
        let result = await registerDao.registerinsert({ username, mail, encryptedPassword });

        const token = jwt.sign(
            {
                userId: username,
                mail,
            },

            // `adfb!23`,
            config.tokenkey


            {
                expiresIn: '24h',
            },
        );
        let userData: IUserType.userData;
        userData = {
            username: username,
            mail: mail,
            token: token,
        };
        return res.status(200).send(userData);
    } catch {
        return res.status(500).send('Something went wrong. Please try again');
    }
};
