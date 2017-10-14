
/**
 * Module Dependencies
**/
var router	= require('express').Router();

var deviceRoutes = require('./api/v1/routes/DeviceRoutes');

/**
 * GET /
 * Render Home page
 */
router.get('/', function (req, res) {
    //res.render('index');
    res.status(200).json({ message: 'Connected!' });
});

router.use('/api/v1', deviceRoutes);

module.exports = router;