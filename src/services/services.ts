import { Request, Response} from 'express'
import * as serviceDao from '../dao/serviceDao'

interface UserInfo{
        username:string,
        mail:string,
        password:string
}
export const userService = async ( req:Request,res:Response) => {
        const { username, mail, password }:UserInfo = req.body;
        console.log('req body mail',mail)
        let result;
        try{
         result = await serviceDao.findUser(mail)
        console.log('result',result)
        }
        catch (error) {
                console.log(error)
                res.status(500).json({error:error})
        }

        res.json({result})
}
export const servicetest = async ( req:Request,res:Response) => {
        res.status(200)
}
