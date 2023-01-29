const path = require("path");
const PathFolder = require("../Utils/Path");
const DoctorsData = require(path.join(PathFolder.pathModels, "Doctors"));

exports.getDoctor = (req, res, next) => {
  const View = path.join(PathFolder.pathViews, "Doctor room.pug");
  const IDCode = req.params.doctorID;
  const DataForRender = {
    datadoctors: DoctorsData.findWithID(IDCode),
  };
  res.render(View, DataForRender);
};

exports.postPopPatient = (req, res, next) => {
};
