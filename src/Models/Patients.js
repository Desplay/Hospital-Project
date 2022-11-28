const Core = require("./BinarySearchTree.core");
const generateIDCode = require("./Generate Code");
const GetDate = require("./Get time");

var Patients = new Core();

const CreatePatient = (inputData) => {
  inputData.date = GetDate.time();
  inputData.dateFormat = GetDate.fullFormat();
  inputData.IDCode = generateIDCode(10);
  inputData.gender = JSON.parse(inputData.gender);
  inputData.disease = JSON.parse(inputData.disease);
  return Patients.create(inputData);
};

const findWithIDPatient = (IDCode) => {
  return Patients.find(IDCode);
};

const editPatient = (newDataPatient) => {
  Patients.remove(newDataPatient.IDCode);
  Patients.create(newDataPatient);
};

const Remove = (Input) => {
  Patients.remove(Input);
};

const popPatient = () => {
  Patients.shift();
};

const ReturnDataPatients = () => {
  return Patients.Return();
};

module.exports = { Remove, CreatePatient, findWithIDPatient, editPatient, popPatient, ReturnDataPatients };
