
/*module.exports = function(app) {
	
	var device = require('../controllers/DeviceController');
	
	// device Routes
	app.route('/api/v1/devices')
		.get(device.read_all)
		.post(device.create);


	app.route('/api/v1/devices/:id')
		.get(device.read_one)
		.put(device.update)
		.delete(device.destroy);
};*/

var router = require('express').Router();

var device = require('../controllers/DeviceController');

router.get('/devices', device.read_all);
router.post('/devices', device.create);

router.get('/devices/:id', device.read_one);
router.put('/devices/:id', device.update);
router.delete('/devices/:id', device.destroy);

module.exports = router;