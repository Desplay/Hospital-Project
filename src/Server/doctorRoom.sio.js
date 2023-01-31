const path = require("path");
const PathFolder = require("../Utils/Path");

const { findWithID } = require(path.join(PathFolder.pathModels, "Doctors"));

const DoctorRoom = (io, socket) => {
  io.emit("syncDoctorRoom", () => {
    socket.on("requestDoctorData", (IDDoctor) => {
      socket.emit("syncData", findWithID(IDDoctor).treatPatients.Return());
    });
  });
};

module.exports = DoctorRoom;
