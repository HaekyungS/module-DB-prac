import mysql from 'mysql2'

// console.log(data)

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'tester',
  password : 'test',
  port : 3306,
  database : 'logininfo'
});

connection.connect();

let Query = `insert into login(ID,Pass) values ('jemini','shark')`

connection.query(Query,(error,results,field)=>{
  if(error) console.log('뭔가 잘못됨 다시 가')
  console.log(Query+'가 정상적으로 DB에 입력되었습니다. success~');
});

connection.end();