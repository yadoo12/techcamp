'use strict';

const express = require('express') ;
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser()); //宣言
app.use(express.static('public')); //宣言

app.get('/',  (req, res)  => res.sendFile(__dirname+'/public/index1.html'));
app.post('/post',  (req, res)  => {
    console.log(req.body);
    console.log(req.body.userid);
    console.log(req.body.password);
    console.log("postリクエストがきたよ！");

    res.sendFile(__dirname+'/public/index11.html');
});

app.listen(PORT);
console.log(`listening on *: ${PORT}`);
