const express = require('express');
const app = express();
let server = app.listen(3000);
app.use(express.static('public'))

const socket = require('socket.io');
let io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

io.sockets.on('connection', newConnection);
function newConnection(socket){
    console.log(socket.id);
}

