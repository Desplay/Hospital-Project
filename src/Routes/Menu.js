const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render(path.join(__dirname, '../', 'Views','Menu.pug'));
});


module.exports= router;