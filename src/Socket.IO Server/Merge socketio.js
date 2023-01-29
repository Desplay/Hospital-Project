const lobby = require("./lobby.sio");
const queueRoom = require("./queueRoom.sio");
const doctorRoom = require("./doctorRoom.sio");

const SocketIO = (io) => {
  io.on("connection", (socket) => {
    console.log("client connected:", socket.id);
    lobby(io);
    queueRoom(io);
    doctorRoom(io, socket);
  });
};

module.exports = SocketIO;
