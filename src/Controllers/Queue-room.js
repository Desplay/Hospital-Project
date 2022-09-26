const path = require('../Utils/Path');
const PartientsData = require('../Models/lobby');

exports.getQueueRoom = (req, res, next) => {
    const Path = path.pathViews + '/Queue-room.pug';
    res.render(Path, {
        datapatients: datapatients = PartientsData.return(),
        datadoctors: datadoctors = require(path.pathData + '/Data/Doctors.json'),
    })
}