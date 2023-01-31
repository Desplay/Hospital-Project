const path = require("path");
const PathFolder = require("./src/Utils/Path");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");
const SocketIO = require("./src/Server/Merge socketio");

const router = require(path.join(PathFolder.pathRoutes, "Merge Routers"));

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");
app.use(express.static(PathFolder.pathData));

SocketIO(io);


server.listen(port, () => {
  console.log("server starting on port " + port);
});

router(app);
