'use strict';

const express = require('express') ;
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser()); //宣言
app.use(express.static('public')); //宣言

app.get('/',  (req, res)  => res.send('Hello World'));
app.get('/jo',  (req, res)  => res.send('のりべん'));
app.get('/shibayama',  (req, res)  => res.send('フットサル'));
//index.htmlを読み込む

app.get('/login',  (req, res)  => res.sendFile(__dirname+'/public/index.html'));
app.post('/post',  (req, res)  => {
    console.log(req.body);
    console.log(req.body.userid);
    console.log(req.body.password);
    console.log("postリクエストがきたよ！");

    let mes = "入力した文字は";
    mes += `ログインID:${req.body.userid} / パスワード:${req.body.password}`;
    mes += "です";
    res.send(mes);
});

app.listen(PORT);
console.log(`listening on *: ${PORT}`);
