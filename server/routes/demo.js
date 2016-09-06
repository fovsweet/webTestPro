var express = require('express'),
    router = express.Router(),
    proxy = require('http-proxy-middleware');

router.get('/', function(req, res) {
    res.render('demo');
});

var options = {
    target: 'http://www.example.org', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    pathRewrite: {
        '^/api' : '/code-api/v1/api/code/serializable/3111',     // rewrite path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'localhost:3000' : 'http://192.168.1.181:8818'
    }
};

router.post('/api', proxy(options));

module.exports = router;