const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors:{origin:"*"}});

io.on("connection", (socket) => {
    console.log("socket is",socket);
    socket.on("chat", (arg) => {
        console.log(arg); 
        io.emit("chat",arg);// world
      });
});

httpServer.listen(5000,()=>{console.log("server listening at port 5000");});