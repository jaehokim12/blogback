import { Request, Response } from 'express';
import * as database from '../../database';
import * as bcrypt from 'bcryptjs';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginDao } from '../dao/login';
interface UserInfo {
    mail: string;
    passwords: string;
    token?: string;
}
interface dbUserData {
    Username: string;
    Email: string;
    Passwd: string;
}
export const login = async (req: Request, res: Response) => {
    try {
        const { mail, passwords } = req.body as UserInfo;
        let userData: dbUserData = await loginDao(mail);
        const { Username, Email, Passwd } = userData;

        const comparepasswd = await bcrypt.compare(passwords, userData.Passwd);

        if (userData && comparepasswd) {
            const token = jwt.sign(
                {
                    userId: Username,
                    mail,
                },

                `adfb!23`,

                {
                    expiresIn: '24h',
                },
            );

            return res.status(200).send({
                data: {
                    mail: userData.Email,
                    token: token,
                    username: userData.Username,
                },
            });
        }

        return res.status(400).send('Invalid credentials. Please try again');
    } catch {
        return res.status(500).send('Something went wrong. Please try again');
    }
};
