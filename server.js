
/**
 * Module Dependencies
**/
var express			= require('express');
var path			= require('path');
var	mongoose		= require('mongoose');
var	bodyParser		= require('body-parser');

// Additional Modules
var config			= require('./config/index');
var Device			= require('./api/v1/models/device');

var i18n			= require('i18next');
var i18nMiddleware	= require('i18next-express-middleware');
var i18nFsBackend	= require('i18next-node-fs-backend');	

/**
 * Create Express app
**/
var app = express();

/**
 * i18next init Configuration
**/
i18n
	.use(i18nFsBackend)
	.use(i18nMiddleware.LanguageDetector)
	.init({
		lng: 'en',
		backend: {
			loadPath: __dirname + '/locales/{{lng}}/translation.json',
			addPath: __dirname + '/locales/{{lng}}/missing.json'
		}, 
		fallbackLng: 'en',
		preload: ['en', 'jp'],
		debug: true,
		saveMissing: true
	});

app.use(i18nMiddleware.handle(i18n, {
	removeLngFromUrl: false
}));

/**
 * Setup middleware
**/
app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
// view engine setup
app.set('views', path.join(__dirname + '/app/views'));
app.set('view engine', 'pug');

// Define the path for the static files like image, css and js files
app.use(express.static(path.join(__dirname,'/public')));
// view controllers
app.use('/ctrls', express.static(path.join(__dirname,'/app/ctrls')));
// node_module libs
app.use('/libs', express.static(path.join(__dirname, 'node_modules')));

/**
 * Routes/Routing
**/
app.use('/', require('./routes'));

/**
 * Start Server, & Connect to DB
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
		console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
	});
});

/**
 * Error Handling
**/
app.use(function(req, res) {
	//res.status(404).send({url: req.originalUrl + ' not found'});
	res.render('error');
});