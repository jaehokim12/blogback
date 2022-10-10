
// import * as serviceQuery from './serviceQuery'
import * as database from './database'

// export const serviceOne =  (req:Request,res:Response,next:NextFunction)=>{
//         console.log('req',req)
//         try {
//         const data =   database.executeQuery(serviceQuery.queryone)
//         console.log("data::::::",data)
//         res.json(data)
//         }
//         catch (error) {
//             console.log(error)
//         }
//         next()
// }

export const serviceOne = async ()=> {
        
        try {
    const result = await database.promisePool.query('select * from test');
    
    return result[0];
  } catch (err) {
        console.log("err",err)
    return err;
  }
  
}
// export const serviceTwo = database.executeQuery(serviceQuery.queryone)