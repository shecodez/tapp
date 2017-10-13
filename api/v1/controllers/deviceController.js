'use strict';

var mongoose = require('mongoose'),
	Device = mongoose.model('Devices');


// GET tapp.io/api/v1/devices
exports.list_all_devices = function(req, res) {
	Device.find({}, function(err, device) {
		if (err)
			res.send(err);
		res.json(device);
	});
};

// POST tapp.io/api/v1/devices/:params
exports.create_a_device = function(req, res) {
	var new_device = new Device(req.body);
	new_device.save(function(err, device) {
		if (err)
			res.send(err);
		res.json(device);
	});
};

// GET tapp.io/api/v1/devices/:deviceId
exports.read_a_device = function(req, res) {
	Device.findById(req.params.deviceId, function(err, device) {
		if (err)
			res.send(err);
		res.json(device);
	});
};

// PUT tapp.io/api/v1/devices/:params
exports.update_a_device = function(req, res) {
	Device.findOneAndUpdate({_id: req.params.deviceId}, req.body, {new: true}, function(err, device) {
		if (err)
			res.send(err);
		res.json(device);
	});
};

// DELETE tapp.io/api/v1/device/:deviceId
exports.delete_a_device = function(req, res) {
	Device.remove({
		_id: req.params.device
	}, function(err, device) {
		if (err)
			res.send(err);
		res.json({message: 'Device successfully deleted'});
	});
};