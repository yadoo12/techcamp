'use strict'

const http = require('http');
const PORT = 3000;
const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf-8');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end(html);
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);
