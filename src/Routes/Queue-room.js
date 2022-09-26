const express = require('express');

const path = require('../Utils/Path');
const controller = require(path.pathControllers + '/Queue-room')

const router = express.Router();

router.get('/queue-room', controller.getQueueRoom);

module.exports = router;