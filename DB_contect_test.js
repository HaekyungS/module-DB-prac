import mysql from 'mysql2';

const connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : 'zoehae369512*',
  database : 'login',
})

const sql = `select * from info`

connection.connect();

connection.query(sql, (error, results, field)=>{
  if(error) {console.error("뭐 왜 또");}
  console.log(results);
})

connection.end();