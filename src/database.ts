import * as mysql from 'mysql2'
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'root',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
  rowsAsArray:true
})
export const executeQuery = (query='')=>{
  pool.getConnection((err:Error,conn)=>{
    console.log('errr',err)
    let Query = query
    conn.query(Query,function(err:Error, results:mysql.ResultSetHeader, fields:mysql.Field) {
      console.log('errr',err)
      console.log("results:::::",results) 
      console.log("fields:::",fields)
    })
    conn.release()
  })}



