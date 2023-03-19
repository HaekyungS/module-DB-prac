import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'zoehae369512*',
  database: 'album',
})

const albumlist = {
  music: "Painter",
  vocal: "RH,하루나비외3인",
  cover: "Yes",
  original: "NO"
}

connection.connect();

for (let key in albumlist) {
  console.log(`insert into album(${key}) value ('${albumlist[key]}')`);

  const sql = `insert into album(${key}) value ('${albumlist[key]}')`;

  connection.query(sql, (error, results, field) => {
    if (error) { console.error("뭐 왜 또"); }
    console.log(results);
  })
};

connection.end();

// 첫번째만 들어가고 2번째부터 오류 발생. => for 문만 되면 쉽게 DB에 데이터 추가 가능할듯