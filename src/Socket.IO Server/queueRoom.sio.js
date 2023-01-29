const path = require("path");
const PathFolder = require("../Utils/Path");

const { ReturnDataPatientsQueue } = require(path.join(PathFolder.pathModels, "Patients"));

const QueueRoom = (io, app) => {
  io.emit("syncQueueRoom", ReturnDataPatientsQueue());
};

module.exports = QueueRoom;
