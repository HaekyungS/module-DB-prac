import mysql from 'mysql2';

const connection = mysql.createConnection({
host : "%",
user : "tester",
password : "1234",
databases : "rh"
});

connection.connect();

connection.query("select * from info",(error, results, field)=>{
  if(error) throw console.log(error);
  console.log(results);
  console.log(field);
});

connection.end();