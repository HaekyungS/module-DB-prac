import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: '192.168.12.215',
  user: 'loginadmin',
  password: 'login',
  database: 'login',
  port: 3306
});

connection.connect();

connection.query(`select * from login`,(err,result,field)=>{
  if(err) throw err;
    console.log((result.find(element=>element.ID === 'zoe')).Pass)
})

connection.end()