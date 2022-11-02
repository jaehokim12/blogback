
import * as serviceQuery from '../query/serviceQuery'
import * as database from '../database'

export const serviceOne = async ()=> {
        try {
    const result = await database.promisePool.query(serviceQuery.queryone);
    return result[0];
  } catch (err) {
        console.log("err",err)
    return err;
  }
  
}
export const serviceTwo = async ()=> {
  try {
const result = await database.promisePool.query(serviceQuery.querytwo);

return result[0];
} catch (err) {
  console.log("err",err)
return err;
}

}
