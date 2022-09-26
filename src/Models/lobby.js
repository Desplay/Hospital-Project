const fs = require('fs');
const path = require('../Utils/Path');
const PathData = path.pathData + '/Data/Patients.json';

module.exports = class Partients {
    constructor(partient) {
        this.ID = Partients.return().length + 1;
        this.Partient = partient;
    }
    save() {
        fs.readFile(PathData, (err, savePartient) => {
            let Partients = [];
            if(!err) {
                Partients = JSON.parse(savePartient);
            }
            Partients.push(this);
            fs.writeFile(PathData, JSON.stringify(Partients), (err) => {
                if (err) throw err;
            })
        })
    }
    static return() {
        return JSON.parse(fs.readFileSync(PathData))
    }
}