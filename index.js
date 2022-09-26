const express = require('express');
const path = require('./src/Utils/Path');

const Lobby = require(path.pathRoutes + '/Lobby');
const PatientsRoom = require(path.pathRoutes + '/Patients-room');
const Menu = require(path.pathRoutes + '/Menu');
const QueueRoom = require(path.pathRoutes + '/Queue-room');

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/Views');
app.use(express.static(path.pathData));
app.use(Lobby);
app.use(QueueRoom)
app.use(PatientsRoom);
app.use(Menu);

app.use((req, res, next) => {
    res.status(404).render(path.pathViews + '/404.pug');
})

app.listen(3000);