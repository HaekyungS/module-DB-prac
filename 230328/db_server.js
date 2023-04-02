import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: '192.168.0.156',
  user: 'admin_seong',
  password: 'zoehae',
  database: 'IA',
  port: 3306
});

connection.connect();

connection.query(`show tables`,(err,result,field)=>{
  if(err) throw err;
    console.log(result)
})

connection.end()