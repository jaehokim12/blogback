import * as database from '../../database';
import * as registerQuery from '../query/register';
import * as IUserType from '../../interfaces/IUser';

export const register = async (mail: IUserType.userMail) => {
    let [result, value]: any = await database.promisePool.query(`${registerQuery.findUser}`, [mail]);

    return result[0];
};

export const registerinsert = async ({ name, mail, encryptedPassword }: IUserType.DbUserInfo) => {
    let [result, value]: any = await database.promisePool.query(`${registerQuery.insertUser}`, [
        name,
        mail,
        encryptedPassword,
    ]);
    return result;
};
