var express = require('express'),
    router = express.Router(),
    proxy = require('http-proxy-middleware'),
    navdb = require('../db/nav.js')

router.get('/', function(req, res) {
    res.render('yjWork');
});

module.exports = router;