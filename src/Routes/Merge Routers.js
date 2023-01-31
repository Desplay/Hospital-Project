const path = require("path");
const PathFolder = require("../Utils/Path");

const Lobby = require(path.join(PathFolder.pathRoutes, "Lobby"));
const Menu = require(path.join(PathFolder.pathRoutes, "Menu"));
const QueueRoom = require(path.join(PathFolder.pathRoutes, "QueueRoom"));
const DoctorRoom = require(path.join(PathFolder.pathRoutes, "DoctorRoom"));
const PatientProfile = require(path.join(PathFolder.pathRoutes, "Patients profile"));

const router = (app) => {
  app.use(Menu);
  app.use(Lobby);
  app.use(QueueRoom);
  app.use(PatientProfile);
  app.use(DoctorRoom);
  app.use((req, res, next) => {
    res.status(404).render(path.join(PathFolder.pathViews, "404.pug"));
  });
};

module.exports = router;