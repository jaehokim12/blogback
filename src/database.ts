import * as mysql from 'mysql2'

 const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'test',
  database: 'test',
  password: 'test',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
  rowsAsArray:true
})
export const promisePool = pool.promise();



