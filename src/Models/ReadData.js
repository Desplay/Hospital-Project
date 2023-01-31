const fs = require("fs");
const path = require("path");
const PathFolder = require("../Utils/Path");

const DataDoctors = () => {
  const Path = path.join(PathFolder.pathData, "Data", "Doctors.json");
  return JSON.parse(fs.readFileSync(Path));
};

const DiseasesList = () => {
  const Path = path.join(PathFolder.pathData, "Data", "Kind of diseases.json");
  return JSON.parse(fs.readFileSync(Path));
};

module.exports = { DiseasesList, DataDoctors};
