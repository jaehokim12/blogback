import { Request, Response } from 'express';
import * as database from '../../database';
import * as bcrypt from 'bcryptjs';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as IUserType from '../../interfaces/IUser';
import * as loginDao from '../dao/login';
import config from '../../config';
export const login = async (req: Request, res: Response) => {
    try {
        const { mail, password } = req.body as IUserType.UserLoginInfo;
        let userData: IUserType.DbUserData = await loginDao.findUser(mail);
        const { dname, dmail, dpassword } = userData;

        const comparepasswd = await bcrypt.compare(password, userData.dpassword);

        if (userData && comparepasswd) {
            const token = jwt.sign(
                {
                    id: dname,
                    mail,
                },

                config.tokenkey,

                {
                    expiresIn: '24h',
                },
            );
            let userData: IUserType.UserData;
            userData = {
                mail: dmail,
                token: token,
                name: dname,
            };
            return res.status(200).send(userData);
        }

        return res.status(400).send('Invalid credentials. Please try again');
    } catch {
        return res.status(500).send('Something went wrong. Please try again');
    }
};
