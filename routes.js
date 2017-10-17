
/**
 * Module Dependencies
**/
var router	= require('express').Router();

var deviceRoutes = require('./api/v1/routes/DeviceRoutes');

/**
 * GET /
 * render homepage
**/
router.get('/', function (req, res) {
    res.render('home');
});

/**
 * GET /api
 * Send welcome msg
**/
router.get('/api', function (req, res) {
    res.status(200).json({ message: 'Welcome to TApp API.' });
});

/**
 * GET, POST /api/v1/devices
 * GET, PUT, DELETE /api/v1/devices/:id
**/
router.use('/api/v1', deviceRoutes);

module.exports = router;