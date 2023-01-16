import * as database from '../../database';
import * as registerQuery from '../query/register';
import * as IUserType from '../../interfaces/IUser';
import { RowDataPacket } from 'mysql2';

export const findUser = async (dmail: IUserType.userMail) => {
    console.log('finduser');
    let [rows, fields]: any = await database.promisePool.query(`${registerQuery.selectUserData}`, [dmail]);
    if (rows[0]) {
        console.log('rows[0]', rows[0]);
        return rows[0];
    }
};

export const InsertUser = async ({ name, mail, encryptedPassword }: IUserType.UserHashInfo) => {
    let [rows, fields]: any = await database.promisePool.query(`${registerQuery.insertUserData}`, [
        name,
        mail,
        encryptedPassword,
    ]);
    return rows;
};
