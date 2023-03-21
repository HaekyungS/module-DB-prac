import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: '192.168.0.177',
  port: 3306,
  user: 'idtest',
  password: '1234',
  database: 'newdevstest',
  // dialect : 'mysql',
  // dialectOptions : {
  //   options:{
  //     requestTimeout : 3000
  //   }
  // }
})

connection.connect();

connection.query('select * from newtest', (error, results, field) => {
  if (error) {
    console.error("왜?")
  }
  console.log(results)
})

connection.end();