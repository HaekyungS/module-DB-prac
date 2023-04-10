// const mysql = require('mysql2');
import mysql from "mysql2";

const DB = mysql.createConnection({
  host: "112.166.55.253",
  port: 3306,
  user: "IAtest",
  password: "1234",
  database: "IA",
});

// user_information

const querymoon = `insert into user_information(ID, PASSWORD, NAME, ID_NUMBER, PHONE_NUMBER,EMAIL,PERSON_INFO_AGREEMENT,MARKETING_AGREEMENT) VALUE ("knokknok","openthedoor","켜있는건가요","369852147","01001000010","캡쳐하려는데@입력이되네.coco","1","0")`

DB.connect();


DB.query('select * from user_information', (err, result, fields) => {
  if (err) {
    throw err;
  } else {
    console.log(result);
  }
});
DB.end();
