module.exports = function (app) {
    app.use('/', require('./demo'));
    app.use('/yj',require('./yj'))
};
