import { Request, Response} from 'express'
import * as serviceDao from '../dao/serviceDao'


export const serviceOne = async ( req:Request,res:Response) => {
        let result
        console.log('req',req)
        console.log('res',res)
        try{
         result = await serviceDao.serviceOne()
        console.log('resultresult',result)
        }
        catch (error) {
                console.log(error)
                res.status(500).json({error:error})
                }

        res.json({result})
}

export const serviceTwo = async ( req:Request,res:Response) => {
        let result
        console.log('req',req)
        console.log('res',res)
        try{
         result = await serviceDao.serviceTwo()
        console.log('resultresult',result)
        }
        catch (error) {
                console.log(error)
                res.status(500).json({error:error})
                }

        res.json({result})
}

