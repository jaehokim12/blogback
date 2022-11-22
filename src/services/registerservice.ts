import * as serviceQuery from '../query/loginQuery';
import * as database from '../database';
import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface UserInfo {
    username: string;
    mail: string;
    password: string;
}

export const registerservice = async ({ username, mail, password }: UserInfo) => {
    interface QueryResult {
        code: number;
        Rowdata: any;
    }
    const result = await database.promisePool.query(`select Email from User where Email='${mail}'`);
    // return result[0]
    const userExist = result[0].toLocaleString();

    if (userExist) {
        let data: QueryResult;
        data = {
            code: 400,
            Rowdata: 'already Email exist please login',
        };
        return data;
    }

    let data: QueryResult;
    const encryptedPassword = await hash(password, 10);

    // console.log('encryptedPassword', encryptedPassword);
    const user = await database.promisePool.query(
        `insert into User (Username,Email,Passwd) value('${username}','${mail.toLowerCase()}','${encryptedPassword}')`,
    );

    // return data ={
    //   code:200,
    //   Rowdata:userExist,
    // }

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
    // console.log('token', token);

    interface QueryResults {
        code: number;
        Rowdata: string;
    }

    return (data = {
        code: 201,
        Rowdata: {
            mail: mail,
            token: token,
            username: username,
        },
    });
};
