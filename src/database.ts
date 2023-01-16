// import * as mysql from 'mysql2';
import { createPool } from 'mysql2';
import { Pool, PoolOptions } from 'mysql2';
import config from './config';
export const pool = createPool({
    host: config.dbhost,
    user: config.dbuser,
    database: config.db,
    password: config.dbpassword,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 10,
    rowsAsArray: false,
} as PoolOptions);
export const promisePool = pool.promise();
