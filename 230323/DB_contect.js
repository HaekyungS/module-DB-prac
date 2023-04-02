import mysql from 'mysql2'

// console.log(data)

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'tester',
  password : 'test',
  port : 3306,
  database : 'logininfo',
  waitForConnections : true
});

connection.connect();

let Query = `insert into (?,?) values ('iaia','iaiaaiaia')`
let keynValue = {
  'ID' : 'ia',
  'Pass' : 'iaia'
}
let key = [`한글`,`할거야`];
let values = [`iaa`,`iaaa`]
// console.log(typeof(ID))

connection.query(Query,key,(error,results,field)=>{
  if(error) throw error;
  console.log(results+'가 정상적으로 DB에 입력되었습니다. success~');
});

connection.end();