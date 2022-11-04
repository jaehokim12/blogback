
import * as serviceQuery from '../query/serviceQuery'
import * as database from '../database'
import {Request,Response} from 'express'

type mail = string

export const findUser = async (mail:mail)=> {

  try {
        const param = mail
        const result = await database.promisePool.query(`select Email from User where Email='${param}'`);
console.log('resultss',result[0])
return result[0];
} catch (err) {
  console.log("err",err)
return err;
  }
}

