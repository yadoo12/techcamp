'use strict'

const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

  console.log(req.url);
  if(req.url === '/shibayama'){
    res.end('フットサルやりたい\n');
  }else if(req.url === '/jo'){
    res.end('のり弁うまい\n');
  }else{
    res.end('プレイドへようこそ。\n');
  }

}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);
