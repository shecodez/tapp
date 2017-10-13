
/**
 * Module Dependencies
**/
var express		= require('express');
var	mongoose	= require('mongoose');
var	bodyParser	= require('body-parser');

// Additional Modules
var config	= require('./config');
var Device	= require('./api/v1/models/Device');
	
/**
 * Create Express app
**/
var app = express();

/**
 * Setup middleware
**/
app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes/Routing
**/
//var routes = require('./routes.js');
//app.use('/', routes);
var deviceRoutes = require('./api/v1/routes/DeviceRoutes');
deviceRoutes(app);

/**
 * Error Handling
**/
app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

/**
 * Start Server, Connect to DB & Require Routes
 **/
var server = app.listen(config.port, function () {
	/**
	 * Est connection to mongodb
	**/
	mongoose.Promise = global.Promise;
	mongoose.connect(config.db.uri, { useMongoClient: true });

	var db = mongoose.connection;

	db.on('error', function(err) {
		console.error(err);
		process.exit(1);
	});

	db.once('open', function() {
		//require('./routes')(server);
		console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
	});
});