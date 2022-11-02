import express,{Request,Response} from 'express';
import http from 'http'
import * as service from './services/services'
import authRouter from './routes/authRoutes'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api',authRouter)

const server = http.createServer(app);


app.listen(4000,()=>{
    console.log('server listening port:4000')
})


