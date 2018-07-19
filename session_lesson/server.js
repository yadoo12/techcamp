'use strict';

const express = require('express') ;
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 1000
    }
}));
app.use(bodyParser()); //宣言
app.use(express.static('public')); //宣言

app.get('/',  (req, res)  => res.send('Hello World'));
app.get('/jo', sessionCheck, (req, res)  => res.sendFile(__dirname+'/public/noriben.html'));
app.get('/shibayama',  (req, res)  => res.send('フットサル'));
//index.htmlを読み込む

app.get('/login',  (req, res)  => res.sendFile(__dirname+'/public/index.html'));
app.get('/logout',  (req, res)  => {
    req.session.destroy();
    res.redirect('/login');
});

app.post('/post',  (req, res)  => {
    console.log(req.body);
    if((req.body.userid === 'hoge@hoge.com' && req.body.password === 'hogehoge')){
      //res.send(req.body.userid+'さん、ようこそ');
      req.session.user = req.body.userid;
      // res.redirect('/jo');

      
    }else{
        res.send('ログインエラー');
    }
    console.log("postリクエストがきたよ！");
    // res.send(req.body);
});

app.listen(PORT);
console.log(`listening on *: ${PORT}`);

function sessionCheck(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};
