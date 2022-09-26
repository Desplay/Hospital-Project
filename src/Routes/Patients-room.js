const express = require('express');
const path = require('path');
const data = require('./Lobby');
const router = express.Router();

router.get('/queue-room', (req, res, next) => {
    res.render(path.join(__dirname, '../', 'Views','Patients Room.pug'));
});

module.exports= router;