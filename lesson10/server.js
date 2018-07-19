'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http); //5.追記
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//5.追記
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
      socket.broadcast.emit('chat message', msg); //11.追記
      console.log(`message: ${msg}`);
  });

    //8.追記
    socket.on('disconnect', () => {
      console.log('user disconnected');
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
