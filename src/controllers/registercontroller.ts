import { Request, Response} from 'express'
import * as service from '../services/registerservice'

interface UserInfo{
        username:string,
        mail:string,
        password:string
}
interface QueryResult {
        code:number,
        Rowdata:string,
        
    }

export const registercontroller = async ( req:Request,res:Response) => {
        
        try {
        let data;
         data = await service.registerservice(req.body as UserInfo)
         res.status(data.code).json(data.Rowdata)
         
        }
        catch (error) {
                console.log(error)
                res.status(500).json({error:error})
        }

        // res.status(data?.code).json({data})
        // res.json({result}).status(code)
}
