var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('backend/login', { title: 'CMS 3.0' ,layout: 'partial/backend'});
});

module.exports = router;
