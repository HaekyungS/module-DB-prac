import mysql from "mysql2";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "../../.env" });

export default function dbConnection() {
  const connection = mysql.createConnection({
    host: process.env.My_host,
    user: process.env.My_user,
    password: process.env.My_password,
    database: process.env.My_database,
    port: process.env.My_port,
  });

  connection.connect(console.log("Port is 3306"));

  const formdata = fs.readFileSync("../server/formdata.json");
  console.log(formdata)


  // const formvalue = Object.values(formdata).map((e) => {
  //   return `${e}`;
  // }).join();

//   connection.query(
//     `insert into info(${Object.keys(formdata).join()}) value(${formvalue})`,
//     (err, result) => {
//       if (err) throw console.log(err);
//       console.log(result);
//     }
//   );

//   // fs.unlinkSync('./formdata.json');

//   connection.end();
}
