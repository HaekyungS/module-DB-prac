import http from 'http';
import fs from 'fs';
import mysql from 'mysql2'


const head = fs.readFileSync('./index_head.text');
const tail = fs.readFileSync('./index_tail.text');
const homepage = fs.readFileSync('./index.html');

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    console.log('일해라 노트북!');
    response.write(homepage)
    response.end();
  }
  if (request.method === 'POST' && request.url === '/login') {

    response.writeHead(200, { 'Content-Type': 'text/html' });

    let formData = ""
    console.log('마저 일해라 노트북!');
    request.on("data", (data) => {
      formData += data;
      console.log(data);
      console.log(formData);

    })
    request.on("end", () => {
      // console.log(data);
      // console.log(formData);

      const id = formData.split("=")[1].split("&")[0];
      const pass = formData.split("=")[2];

      const page = head + `<p>당신의 ID는 ${id}이고,</p> <p>패스워드는 ${pass}입니다.</p>` + tail;

      const connection = mysql.createConnection({
        host: 'localhost',
        user: 'tester',
        password: 'test',
        port: 3306,
        database: 'logininfo'
      });

      connection.connect();

      let Query = `insert logininfo.login(ID,Pass) values ('${id}','${pass}')`

      connection.query(Query, (error, results, field) => {
        if (error) console.log('뭔가 잘못됨 다시 가')
        console.log(Query + '가 정상적으로 DB에 입력되었습니다. success~' + results);
      });

      connection.end();

      response.write(page);
      response.end();
    })

  }
}).listen(2080);
