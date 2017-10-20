
var mongoose = require('mongoose');

var DeviceSchema = new mongoose.Schema({
	brand:String,
	image_url: {
		type: String
	},
	model:String,
	name: {
		type: String,
		required: 'Device name required'
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date
	}
});

var Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;