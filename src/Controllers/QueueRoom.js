const path = require("path");
const PathFolder = require("../Utils/Path");
const PatientsData = require(path.join(PathFolder.pathModels, "Patients"));
const DoctorsData = require(path.join(PathFolder.pathModels, "Doctors"));

exports.getQueueRoom = async (req, res, next) => {
  const Path = path.join(PathFolder.pathViews, "/Queue room.pug");
  res.render(Path, {
    datapatients: PatientsData.ReturnDataPatientsQueue(),
    datadoctors: DoctorsData.dataRender(),
  });
};

exports.postMovePatients = (req, res, next) => {
  const DoctorTreat = DoctorsData.checkTreat(PatientsData.firstPatientQueue());
  if (DoctorTreat) {
    DoctorsData.addPatient(DoctorTreat, PatientsData.popPatientQueue());
  }
  res.redirect("/queue-room");
};
