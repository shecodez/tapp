'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
	name: {
		type: String,
		required: 'Device name required'
	},
	image_url: {
		type: String
	},
	description: {
		type: String
	},
	instruction: {
		type: String,
		required: 'instruction required'
	},
	driver_url: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date
	}
});

module.exports = mongoose.model('Device', DeviceSchema);