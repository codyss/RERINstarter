var express = require('express');
var router = express.Router();
var request = require('axios');
var Immutable = require('immutable');
var apiKeys = require('./config')

router.get('/test', function (req, res, next) {
  res.send('test')
})

router.get('/hitapi', function (req, res, next) {

})


module.exports = router
