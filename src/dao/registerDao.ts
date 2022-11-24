import * as database from '../database';
import * as registerQuery from '../query/registerQuery';

interface UserInfo {
    mail: string;
}

interface UserInfos {
    mail: string;
    username: string;
    encryptedPassword: string;
}
export const registerDao = async ({ mail }: UserInfo) => {
    let [result, value]: any = await database.promisePool.query(`${registerQuery.findUser}`, [mail]);
    console.log('result in dao', result);
    return result[0];
};

export const registerDaoinsert = async ({ username, mail, encryptedPassword }: UserInfos) => {
    let [result, value]: any = await database.promisePool.query(`${registerQuery.insertUser}`, [
        username,
        mail,
        encryptedPassword,
    ]);
    return result;
};
