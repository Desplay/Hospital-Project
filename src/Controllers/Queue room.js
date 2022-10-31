const path = require("path");
const PathFolder = require("../Utils/Path");
const PatientsData = require(path.join(PathFolder.pathModels, "Patients"));
const DoctorsData = require(path.join(PathFolder.pathModels, "Doctors"));

exports.getQueueRoom = async (req, res, next) => {
  const Path = path.join(PathFolder.pathViews, "/Queue room.pug");
  res.render(Path, {
    datapatients: (datapatients = PatientsData.return()),
    datadoctors: (datadoctors = DoctorsData.return()),
  });
};

exports.postMovePatients = (req, res, next) => {
  DoctorsData.move(PatientsData.return());
  res.redirect("/queue-room");
};
