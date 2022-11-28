const path = require("path");
const PathFolder = require("../Utils/Path");

const { CreatePatient, ReturnDataPatients, popPatient } = require(path.join(PathFolder.pathModels, "Patients"));

exports.getLobby = (req, res, next) => {
  const Path = path.join(PathFolder.pathViews, "Lobby.pug");
  const dataForRender = {
    datagenders: (datagenders = require(path.join(PathFolder.pathData, "Data", "Genders.json"))),
    datadiseases: (datadiseases = require(path.join(PathFolder.pathData, "Data", "Kind of diseases.json"))),
    datapatients: (datapatients = ReturnDataPatients()),
  };
  res.render(Path, dataForRender);
};

exports.postAddPatient = (req, res, next) => {
  const temp = JSON.parse(JSON.stringify(req.body));
  CreatePatient(temp);
  res.redirect("/lobby");
};

exports.popPatient = (req, res, next) => {
  popPatient();
  res.redirect("/lobby");
}
