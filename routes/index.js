var express = require('express');
var router = express.Router();
var gardener = require('gardener');

var temp = gardener.getTemp();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Gardener', temp: temp });
});

module.exports = router;
