const path = require("path");
const PathFolder = require("../Utils/Path");

const { ReturnDataPatientsLobby } = require(path.join(PathFolder.pathModels, "Patients"));

const Lobby = (io) => {
  io.emit("syncLobby", ReturnDataPatientsLobby());
};

module.exports = Lobby;
