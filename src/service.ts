import * as mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'root',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
  rowsAsArray:true
})

pool.getConnection(function(err:Error, conn) {
  console.log('errr',err)
   conn.query('SELECT * FROM test',function(err:Error, results:mysql.Field, fields:mysql.Field) {
    console.log(results) // will be an array of arrays rather than an array of objects
    console.log('errr',err)
    console.log(fields)
  })
  conn.release()
})
export const service = pool;

