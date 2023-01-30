const path = require("path");
const PathFolder = require("../Utils/Path");

const { ReturnDataPatientsQueue } = require(path.join(PathFolder.pathModels, "Patients"));
const { dataRender } = require(path.join(PathFolder.pathModels, "Doctors"));

const QueueRoom = (io) => {
  const dataForRender = {
    patients: ReturnDataPatientsQueue(),
    doctors: dataRender(),
  };
  io.emit("syncQueueRoom", dataForRender.patients, dataForRender.doctors);
};

module.exports = QueueRoom;
