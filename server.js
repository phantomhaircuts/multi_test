
let express = require('express');
let app = express();
let host = process.env.PORT || 3000;
let server = app.listen(host)

app.use(express.static('public'));

console.log("Socket server is running. localhost:" + host)

let socket = require('socket.io')
const io = require("socket.io")(server, {
	cors: {
	  origin: "https://example.com",
	  methods: ["GET", "POST"]
	}
  });

io.sockets.on('connection', newConnection)

function newConnection(socket){
	console.log('connection:',	socket.id);
	socket.on('mouse', mouseMsg);
	
	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data)
		console.log(data)
	}
}