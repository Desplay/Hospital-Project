const fs = require("fs");
const path = require("path");
const PathFolder = require("../Utils/Path");
const PathDataDoctors = path.join(PathFolder.pathData, "Data", "Doctors.json");

const core = require("./Queue.core");

const Doctor = [];

const CreateDoctor = () => {
  JSON.parse(fs.readFileSync(PathDataDoctors)).forEach((element) => {
    const node = {
      Doctor: element,
      treatPatients: new core(),
    };
    Doctor.push(node);
  });
};
CreateDoctor();

const AddPatient = (inputDoctor, inputPatient) => {
  return inputDoctor.treatPatients.enqueue(inputPatient);
};

const checkTreat = (inputPatient) => {
  return Doctor.find((element) => element.Doctor.specialist === inputPatient.disease.specialist && element.Doctor.slot > element.treatPatients.Return().length);
};

const findWithID = (inputIDCode) => {};

const DataRender = () => {
  return Doctor;
};

module.exports = { DataRender, AddPatient, checkTreat, findWithID };
