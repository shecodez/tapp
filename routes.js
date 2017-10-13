var express = require('express');
var router = express.Router();

/**
 * GET /
 * Render Home page
 */

router.get('/', function (req, res) {
    res.render('index');
});

var deviceRoutes = require('./api/v1/routes/DeviceRoutes');