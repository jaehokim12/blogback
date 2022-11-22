import express, { Request, Response } from 'express';
import router from '../src/api/routes/authroutes';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);
app.listen(process.env.API_PORT, () => {
    console.log(`server listensng port:${process.env.API_PORT}`);
});

export default app;
