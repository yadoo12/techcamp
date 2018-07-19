'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http); //5.追記
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html');
});
