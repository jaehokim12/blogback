import * as database from '../database';
import * as loginQuery from '../query/loginQuery';
type paramType = string;
export const loginDao = async (mail: paramType) => {
    // await database.promisePool.query(`select Username,Email,Passwd from User where Email= ?`, [mail]);
    await database.promisePool.query(`${loginQuery.findUsers}`, [mail]);
};
