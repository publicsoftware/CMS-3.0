var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'CMS 3.0' ,layout: 'partial/layout'});
});

module.exports = router;
