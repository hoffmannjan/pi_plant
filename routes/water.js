var express = require('express');
var router = express.Router();

/* GET watering page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Trwa podlewanie rośliny...'})
});

module.exports = router;
