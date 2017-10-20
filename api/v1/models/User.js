var mongoose = require('mongoose');

var languages = ['CN', 'EN', 'JP', 'KR'];

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: 'User name required'
	},
	email: {
		type: String,
		required: 'Email required'
	},
	language: {
		type: String,
		enum : languages,
		default: 'EN'
	},
	admin: {
		type: Boolean,
		default: false
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date
	}
});

var User = mongoose.model('User', UserSchema);
module.exports = User;