import { Request,Response } from "express"
import * as service from '../services/registerservice'
export const logincontroller = async (req:Request,res:Response)=>{
    
        
        let result;
        try {
         result = await service.registerservice(req.body)
        console.log('result',result)
        }
        catch (error) {
                console.log(error)
                res.status(500).json({error:error})
        }

        res.json({result})
}