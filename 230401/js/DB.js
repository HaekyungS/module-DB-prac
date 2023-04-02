import mysql from 'mysql2';

function DB_connect(query){
const connection = mysql.createConnection({
  host : '118.42.3.29',
  user : 'test',
  password : 'test',
  database : 'login',
  port : 3306
})

connection.connect( console.log('Database on port 3306') );

connection.query(query, (err, result, field)=>{
  if(err) throw err;
  console.log(result)
})
}

export default DB_connect