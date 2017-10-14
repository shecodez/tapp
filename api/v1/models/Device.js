
var mongoose = require('mongoose');
//var mongooseStringQuery = require('mongoose-string-query');
//var timestamps = require('mongoose-timestamp');

var DeviceSchema = new mongoose.Schema({
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

//DeviceSchema.plugin(timestamps);
//DeviceSchema.plugin(mongooseStringQuery);

var Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;