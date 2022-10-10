import express from 'express';
import * as service from './service'
// service module 에서 service을 가져옴
const app = express();
// app.get('/',((req:express.Request,res:express.Response)=>{
//     service.serviceOne
//     console.log('req',req)
//     res.send('root')}))
app.get('/test',service.serviceOne)
app.listen(4000,()=>{
    console.log('server listening port:4000')
})
export default app;