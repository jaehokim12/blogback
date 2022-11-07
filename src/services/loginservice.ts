import { Request, Response } from 'express';
import * as database from '../database';
import * as bcrypt from 'bcryptjs';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const loginservice = async (req: Request, res: Response) => {
  interface UserInfo {
    username: string;
    mail: string;
    passwords: string;
    token?: string;
  }
  interface dbUserData {
    Username: string;
    Email: string;
    Passwd: string;
  }
  try {
    console.log('login event came');
    const { mail, passwords, username } = req.body as UserInfo;

    let [result]: any = await database.promisePool.query(`select Username,Email,Passwd from User where Email= ?`, [
      mail,
    ]);
    let userData: dbUserData = result[0];
    const { Username, Email, Passwd } = userData;
    console.log('userData', userData.Email);
    console.log('userData', userData.Passwd);
    console.log('userData', userData.Username);
    // res.send();

    const comparepasswd = await bcrypt.compare(passwords, userData.Passwd);

    if (userData && comparepasswd) {
      console.log('userdatauserdata', userData);
      const token = jwt.sign(
        {
          userId: username,
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
