const PriotityQueue = require("./BinarySearchTree.core");
const Queue = require("./Queue.core");
const generateIDCode = require("./Generate Code");
const GetDate = require("./Get time");

var PatientsInLobby = new PriotityQueue();
var PatientsReadyTreat = new Queue();

const CreatePatient = (inputData) => {
  inputData.date = GetDate.time();
  inputData.dateFormat = GetDate.fullFormat();
  inputData.IDCode = generateIDCode(10);
  inputData.gender = JSON.parse(inputData.gender);
  inputData.disease = JSON.parse(inputData.disease);
  return PatientsInLobby.enqueue(inputData);
};

const findWithIDPatient = (IDCode) => {
  return PatientsInLobby.find(IDCode);
};

const editPatient = (newDataPatient) => {
  PatientsInLobby.remove(newDataPatient.IDCode);
  CreatePatient(newDataPatient);
};

const popPatientLobby = () => {
  PatientsReadyTreat.enqueue(PatientsInLobby.dequeue());
};

const firstPatientQueue = () => {
  return PatientsReadyTreat.queue.value;
}

const popPatientQueue = () => {
  return PatientsReadyTreat.dequeue();
}

const ReturnDataPatientsLobby = () => {
  return PatientsInLobby.Return();
};

const ReturnDataPatientsQueue = () => {
  return PatientsReadyTreat.Return();
}

module.exports = { CreatePatient, findWithIDPatient, editPatient, firstPatientQueue, popPatientLobby, popPatientQueue, ReturnDataPatientsLobby, ReturnDataPatientsQueue };
