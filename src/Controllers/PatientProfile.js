const path = require("path");
const PathFolder = require("../Utils/Path");
const PatientsData = require(path.join(PathFolder.pathModels, "Patients"));

exports.editPatient = (req, res, next) => {
  const View = path.join(PathFolder.pathViews, "Edit Patient.pug");
  const IDCode = req.params.patientIDCode;
  const dataForRender = {
    datagenders: (datagenders = require(path.join(PathFolder.pathData, "Data", "Genders.json"))),
    datadiseases: (datadiseases = require(path.join(PathFolder.pathData, "Data", "Kind of diseases.json"))),
    patient: PatientsData.findWithIDPatient(IDCode),
  };
  res.render(View, dataForRender);
};

exports.postEditPatient = (req, res, next) => {
  const patientAfterEdit = JSON.parse(JSON.stringify(req.body));
  PatientsData.editPatient(patientAfterEdit);
  res.redirect("/lobby");
};
