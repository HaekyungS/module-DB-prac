import mysql from "mysql2";
import DBInfo from "./restParameter_DB.js";

const connection = mysql.createConnection(
  DBInfo("localhost","zoe","zoezoe","login","3306")
)

// console.log(connection)

connection.connect(console.log("Port is 3306"));

connection.query("select * from info",(err,result)=>{
  if(err) throw err;
  console.log(result)
})

connection.end();