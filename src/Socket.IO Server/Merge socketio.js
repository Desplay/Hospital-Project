const lobby = require("./lobby.sio");
const queueRoom = require("./queueRoom.sio");

const SocketIO = (io, app) => {
  io.on("connection", (socket) => {
    console.log("client connected:", socket.id);
    lobby(io, app);
    queueRoom(io, app);
  });
};

module.exports = SocketIO;
