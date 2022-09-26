const path = require('../Utils/Path');
const PartientsData = require('../Models/lobby');

exports.getLobby = (req, res, next) => {
    const Path = path.pathViews + '/Lobby.pug';
        res.render(Path,{
            datagenders: datagenders = require(path.pathData + '/Data/Genders.json'),
            datadiseases: datadiseases = require(path.pathData + '/Data/Kind of diseases.json'),
            datapatients: datapatients = PartientsData.return()
        });
}

exports.postLobby = async (req, res, next) => {
    const temp = JSON.parse(JSON.stringify(req.body));
    const partient = new PartientsData(temp);
    partient.save();
    res.redirect('/lobby');
}