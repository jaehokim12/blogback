import * as database from '../../database';
import * as loginQuery from '../query/login';
type paramType = string;
export const findUser = async (mail: paramType) => {
    let [result]: any = await database.promisePool.query(`${loginQuery.selectUserDataWithEmail}`, [mail]);
    return result[0];
};
