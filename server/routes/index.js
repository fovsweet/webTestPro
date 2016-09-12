var navdb = require('../db/nav.js')

module.exports = function (app) {
    app.use('/', require('./demo'));
    app.use('/yj',require('./yj'));

    // nav数据获取
	app.post('/nav',function(req,res){
		res.send(navdb.navDate())
	})
};
