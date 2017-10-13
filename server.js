
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
	mongoose = require('mongoose'),
	Device = require('./api/v1/models/deviceModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:password@ds119585.mlab.com:19585/tapp');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/v1/routes/deviceRoutes');
routes(app);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port);

console.log('TApp API server started on: ' + port);