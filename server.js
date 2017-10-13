
/**
 * Module Dependencies
**/
var express		= require('express');
var	mongoose	= require('mongoose');
var	bodyParser	= require('body-parser');

// Additional Modules
var Device = require('./api/v1/models/deviceModel');
	
/**
 * Create Express app
**/
var app = express();

/**
 * Setup
**/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:password@ds119585.mlab.com:19585/tapp');

app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes/Routing
**/
var routes = require('./api/v1/routes/deviceRoutes');
routes(app);

/**
 * Error Handling
**/
app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

/**
 * Start server
**/
var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
	console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});