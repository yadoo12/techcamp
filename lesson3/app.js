'use strict'

const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end('お腹いっぱい\n');
}).listen(PORT);

console.log("1000円のりべん")
console.log(`Server running at http://localhost:${PORT}`);
