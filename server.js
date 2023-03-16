const express = require('express')
const app  = express()

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
} )

app.listen(5000, () => {console.log("Server started on port 5000")})

/*
// webSocketImplementation-------
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { ... });
  client.on('disconnect', () => { ... });
});
server.listen(4000);
*/