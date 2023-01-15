// declare namespace Express {
//     export interface Request {
//         user: any;
//     }
//     export interface Response {
//         user: any;
//     }
// }

declare namespace NodeJS {
    export interface ProcessEnv {
        API_PORT: number;
        TOKEN_KEY: string;
        DBHOST: string;
        DBUSER: string;
        DB: string;
        DBPASSWORD: string;
        DBPORT: number;
    }
}
