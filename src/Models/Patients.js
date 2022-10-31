const fs = require("fs");
const path = require("path");

const PathData = require("../Utils/Path");
const generateIDCode = require("./Generate Code");

const PathDataPatients = path.join(PathData.pathData, "Data", "Patients.json");
const Diseases = JSON.parse(
  fs.readFileSync(path.join(PathData.pathData, "Data", "Kind of diseases.json"))
);

const PathDataPatientsTreated = path.join(
  PathData.pathData,
  "Data",
  "Patients treated.json"
);

const sort = (inputData) => {
  inputData.sort((a, b) => {
    let x = Diseases.find(
      (Element) => Element.disease === a.Patient.disease
    ).prioritized;
    let y = Diseases.find(
      (Element) => Element.disease === b.Patient.disease
    ).prioritized;
    return x - y;
  });
};

module.exports = class Patients {
  constructor(patient) {
    this.IDCode = generateIDCode(10);
    this.Patient = patient;
  }
  save() {
    fs.readFile(PathDataPatients, (err, savePartient) => {
      let Patients = [];
      if (!err) {
        Patients = JSON.parse(savePartient);
      }
      Patients.push(this);
      sort(Patients);
      fs.writeFileSync(PathDataPatients, JSON.stringify(Patients));
    });
  }
  static edit(inputData) {
    var Data = this.return();
    for (var i = 0; i < Data.length; i++) {
      if (inputData.ID === Data[i].IDCode) {
        delete inputData.ID;
        const temp = new Patients(inputData);
        delete Data[i];
        Data.push(temp);
        Data = Data.filter((data) => {
          return data !== null;
        });
        sort(Data);
        return fs.writeFileSync(PathDataPatients, JSON.stringify(Data));
      }
    }
  }
  static findWithID(IDCode) {
    const PatientsData = this.return();
    return PatientsData.find((p) => p.IDCode === IDCode);
  }
  static pop(IDCode) {
    let PatientsData = this.return();
    const popPatient = PatientsData.find((p) => p.IDCode === IDCode);
    PatientsData = PatientsData.filter((p) => {
      return p.IDCode !== IDCode;
    });
    fs.writeFileSync(PathDataPatients, JSON.stringify(PatientsData));
    return popPatient;
  }
  static return() {
    return JSON.parse(fs.readFileSync(PathDataPatients));
  }
  static returnTreated() {
    return JSON.parse(fs.readFileSync(PathDataPatientsTreated));
  }
};
