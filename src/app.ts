import express,{Request,Response} from 'express';
import router from '../src/api/routes/authroutes'
import cors from 'cors'
import dotenv from 'dotenv'

    dotenv.config();
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cors());
    app.use('/api',router)
    app.listen(4000,()=>{
        console.log('server listensng port:4000')
    })


export default app

