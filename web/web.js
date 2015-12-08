// Init App/Plugins

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.set('port', process.env.PORT || 8888);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

// Allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Start app

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});