import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: '172.30.1.94',
  port: 3306,
  user: 'tester',
  password: '1234',
  database: 'rh',
  // dialect : 'mysql',
  // dialectOptions : {
  //   options:{
  //     requestTimeout : 3000
  //   }
  // }
})

connection.connect();

connection.query('select * from info', (error, results, field) => {
  if (error) {
    console.error("왜?")
  }
  console.log(results)
})

connection.end();