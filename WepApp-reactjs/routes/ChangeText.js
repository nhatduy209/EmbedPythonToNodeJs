var express = require('express');
var router = express.Router();
var changeText = require('../controller/TextChangeHandler')

const textController = require('../controller/TextChangeHandler')

router.get('/change', changeText.create)

module.exports = router;