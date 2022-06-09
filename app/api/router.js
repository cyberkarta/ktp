var express = require('express');
var router = express.Router();
const {getPenduduk} = require('./controller')


router.get('/penduduk/:id', getPenduduk);

module.exports = router;
