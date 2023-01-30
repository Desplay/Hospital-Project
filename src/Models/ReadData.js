const fs = require("fs");
const path = require("path");
const PathFolder = require("../Utils/Path");

const DataDoctors = () => {
  const Path = path.join(PathFolder.pathData, "Data", "Doctors.json");
  return JSON.parse(fs.readFileSync(Path));
};

const DataPatients = () => {
  const Path = path.join(PathData.pathData, "Data", "Patients.json");
  return JSON.parse(fs.readFileSync(Path));
};

const DataPatientsTreated = () => {
  const Path = path.join(PathFolder.pathData, "Data", "Patients treated.json");
  return JSON.parse(fs.readFileSync(Path));
};

const DiseasesList = () => {
  const Path = path.join(PathFolder.pathData, "Data", "Kind of diseases.json");
  return JSON.parse(fs.readFileSync(Path));
};

const DataPatientsQueue = () => {
  const Path = path.join(PathFolder.pathData, "Data", "Queue.json");
  return JSON.parse(fs.readFileSync(Path));
};

module.exports = { DataPatientsTreated, DiseasesList, DataPatients, DataDoctors, DataPatientsQueue };
