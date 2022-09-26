const express = require('express');
const bodyParser = require('body-parser');

const path = require('../Utils/Path');
const controller = require(path.pathControllers + '/Lobby')

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/lobby', controller.getLobby);
router.post('/lobby/submit', controller.postLobby);

module.exports = router;