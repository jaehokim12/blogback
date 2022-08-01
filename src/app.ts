import express from 'express'
const app = express();
app.get('/',((_req,res)=>{
    console.log('req',_req)
    res.send('root')}))
app.listen(4000,()=>{
    console.log('server listening port:4000')
})