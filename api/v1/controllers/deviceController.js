/**
 * Module Dependencies
**/
var mongoose = require('mongoose');

/**
 * Model Schema
**/
var	Device = mongoose.model('Device');


// GET tapp.io/api/v1/devices
exports.read_all = function(req, res) {
	Device.find({}, function(err, device) {
		if (err)
			res.send(err);
		
		res.json(device);
	});
};

// POST tapp.io/api/v1/devices/:params
exports.create = function(req, res) {
	var device = new Device();
	
	device.name = req.body.name;
	device.instruction = req.body.instruction;

	device.save(function(err) {
		if (err) 
			res.send(err);

		res.json({ message: 'Device created!' });
	});
};

// GET tapp.io/api/v1/devices/:id
exports.read_one = function(req, res) {
	Device.findById(req.params.id, function(err, device) {
		if (err)
			res.send(err);
		
		res.json(device);
	});
};

// PUT tapp.io/api/v1/devices/:params
exports.update = function(req, res) {
	var device = req.body;
	
	device.updated_at = Date.now();

	Device.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, device) {
		if (err)
			res.send(err);
		
		res.json(device);
	});
};

// DELETE tapp.io/api/v1/device/:id
exports.destroy = function(req, res) {
	Device.findByIdAndRemove(req.params.id, function(err, device) {
		if (err)
			res.send(err);
		
		res.json({message: 'Device successfully deleted'});
	});
};