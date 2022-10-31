const path = require("path");
const PathFolder = require("../Utils/Path");
const PatientsData = require(path.join(PathFolder.pathModels, "Patients"));
const DoctorsData = require(path.join(PathFolder.pathModels, "Doctors"));

exports.getDoctor = (req, res, next) => {
  const View = path.join(PathFolder.pathViews, "Doctor room.pug");
  const IDCode = req.params.doctorID;
  const DataForRender = {
    datapatients: (datapatients = PatientsData.returnTreated()),
    datadoctors: (datadoctors = DoctorsData.findWithID(IDCode)),
  };
  res.render(View, DataForRender);
};

exports.postPopPatient = (req, res, next) => {
    const IDDoctor = req.params.ID;
    const temp = IDDoctor.split("-");
    DoctorsData.popPatient(Number(temp[0]), Number(temp[1]));
    res.redirect("/doctor-" + Number(temp[0]));
};
