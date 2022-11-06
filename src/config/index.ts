import dotenv from 'dotenv';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();


export default {

    apiPort: process.env.API_PORT,
    tokenKey: process.env.TOKEN_KEY
}