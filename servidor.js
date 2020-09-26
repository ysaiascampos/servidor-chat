const express = require('express');
const http = require('http');
const app = express();
const servidor = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(servidor);

io.on('connection', socket => {
    socket.on('conectado', () => {
        console.log("Usuario conectado")
    })
})

servidor.listen(3000, () => console.log("Servidor inicializar"));