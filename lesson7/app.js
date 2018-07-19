'use strict'

const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'plaid-tc.mysql.database.azure.com',
    user     : 'plaid@plaid-tc',
    password : 'pla!dp1aid',
    database : 'yadoodb'
});

//ここからMySQLアクセス
connection.connect();

let sql = 'delete from yadoodb.boards where id=7;';
connection.query(sql, (err, rows, fields) => {
  if (err) throw err;
  console.log('boardsテーブル: ', rows);
});

connection.end();
