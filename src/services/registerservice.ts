
import * as serviceQuery from '../query/serviceQuery'
import * as database from '../database'
import {Request,Response} from 'express'
import {hash} from 'bcryptjs'


interface UserInfo{
  username:string,
  mail:string,
  password:string
}

export const registerservice = async ({username, mail ,password}:UserInfo)=> {

  interface QueryResult {
      code:number,
      Rowdata:string,
      
  }
        const result = await database.promisePool.query(`select Email from User where Email='${mail}'`);
        // return result[0]
        const userExist = result[0].toLocaleString()
        
        if(userExist){
          let data:QueryResult;
            data = {
            code:400,
            Rowdata:userExist,
          }
          return data
        }
        let data:QueryResult
       

        const encryptedPassword = await hash(password,10)
        console.log('encryptedPassword',encryptedPassword)
        

      
        const user = await database.promisePool.query(`insert into User (Username,Email,Passwd) value('${username}','${mail.toLowerCase()}','${encryptedPassword}')`);
        console.log('user',user)
        return data ={
          code:200,
          Rowdata:userExist,
        }
}

