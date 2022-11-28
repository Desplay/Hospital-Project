const fs = require("fs");
const path = require("path");
const PathFolder = require("../Utils/Path");

const PatientsData = require(path.join(PathFolder.pathModels, "Patients"));

const CheckDiseases = (inputPatients, inputDoctors) => {
  const PatientDisease = DiseasesList.find((p) => p.disease === inputPatients.Patient.disease);
  const Doctor = inputDoctors.find((p) => p.Doctor.specialist === PatientDisease.specialist && p.Doctor.patients.length < p.Doctor.slot);
  if (Doctor === undefined) {
    return null;
  }
  return {
    Patient: inputPatients,
    treatedBy: Doctor.Doctor.ID,
  };
};

module.exports = class Doctors {
  static move(PatientsList) {
    fs.readFile(PathPatientsTreated, (err, Partient) => {
      let List = [];
      if (!err) {
        List = JSON.parse(Partient);
      }
      for (var i = 0; i < PatientsList.length; i++) {
        const temp = CheckDiseases(PatientsList[i], this.return());
        if (temp !== null) {
          temp.ID = List.length + 1;
          PatientsData.pop(PatientsList[i].IDCode);
          List.push(temp);
          this.AddPatient(temp);
        }
      }
      fs.writeFileSync(PathPatientsTreated, JSON.stringify(List));
    });
  }
  static AddPatient = (inputData) => {
    var Data = this.return();
    for (var i = 0; i < Data.length; i++) {
      if (inputData.treatedBy === Data[i].Doctor.ID) {
        Data[i].Doctor.patients.push(inputData.ID);
        return fs.writeFileSync(PathDataDoctors, JSON.stringify(Data));
      }
    }
  };
  static findWithID = (ID) => {
    const DataDoctors = this.return();
    ID = parseInt(ID);
    return DataDoctors.find((p) => p.Doctor.ID === ID);
  };
  static popPatient = (IDDoctor, IDPatient) => {
    let dataPatientsTreated = JSON.parse(fs.readFileSync(PathPatientsTreated));
    const PatientTreated = dataPatientsTreated.find((p) => p.ID === IDPatient);
    let datadoctors = this.return();
    datadoctors[IDDoctor - 1].Doctor.patients = datadoctors[IDDoctor - 1].Doctor.patients.filter((p) => {
      return p !== PatientTreated.ID;
    });
    dataPatientsTreated = dataPatientsTreated.filter((p) => {
      return p.ID !== IDPatient;
    });
    fs.writeFileSync(PathDataDoctors, JSON.stringify(datadoctors));
    fs.writeFileSync(PathPatientsTreated, JSON.stringify(dataPatientsTreated));
  };
  static return() {
    return JSON.parse(fs.readFileSync(PathDataDoctors));
  }
};
