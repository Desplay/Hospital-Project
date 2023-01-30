const path = require("path");
const PathFolder = require("../Utils/Path");
const DoctorsData = require(path.join(PathFolder.pathModels, "Doctors"));
const PatientsData = require(path.join(PathFolder.pathModels, "Patients"));

exports.getDoctor = (req, res, next) => {
  const View = path.join(PathFolder.pathViews, "Doctor room.pug");
  const IDCode = req.params.doctorID;
  const DataForRender = {
    datadoctors: DoctorsData.findWithID(IDCode),
  };
  res.render(View, DataForRender);
};

exports.postPopPatient = (req, res, next) => {
  const DoctorID = req.query.DoctorID;
  const Doctor = DoctorsData.findWithID(DoctorID);
  Doctor.treatPatients.dequeue();

  const PatientReadyAdd = PatientsData.checkPatientWithSpecialist(Doctor.Doctor.specialist);
  if(PatientReadyAdd) {
    Doctor.treatPatients.enqueue(PatientReadyAdd);
    PatientsData.movePatientFromDoctorRequest(PatientReadyAdd);
  }
  res.redirect("/doctor-" + DoctorID);
};
