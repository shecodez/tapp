'use strict';

module.exports = function(app) {
	
	var device = require('../controllers/deviceController');
	
	// device Routes
	app.route('/api/v1/devices')
		.get(device.list_all_devices)
		.post(device.create_a_device);


	app.route('/api/v1/devices/:deviceId')
		.get(device.read_a_device)
		.put(device.update_a_device)
		.delete(device.delete_a_device);
};