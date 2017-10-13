'use strict';

module.exports = function(app) {
	
	var device = require('../controllers/DeviceController');
	
	// device Routes
	app.route('/api/v1/devices')
		.get(device.read_all)
		.post(device.create);


	app.route('/api/v1/devices/:id')
		.get(device.read_one)
		.put(device.update)
		.delete(device.destroy);
};