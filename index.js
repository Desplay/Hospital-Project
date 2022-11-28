const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const PathFolder = require("./src/Utils/Path");

const Lobby = require(path.join(PathFolder.pathRoutes, "Lobby"));
const Menu = require(path.join(PathFolder.pathRoutes, "Menu"));
const QueueRoom = require(path.join(PathFolder.pathRoutes, "Queue room"));
const DoctorRoom = require(path.join(PathFolder.pathRoutes, "Doctor room"));
const PatientProfile = require(path.join(
  PathFolder.pathRoutes,
  "Patients profile"
));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.use(express.static(PathFolder.pathData));
app.use(Menu);
app.use(Lobby);
app.use(QueueRoom);
app.use(PatientProfile);
app.use(DoctorRoom);

app.use((req, res, next) => {
  res.status(404).render(path.join(PathFolder.pathViews, "404.pug"));
});

app.listen(process.env.PORT || 5000);