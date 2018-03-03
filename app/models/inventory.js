let mongoose = require('mongoose');

module.exports = mongoose.model('Inventory', {
	text: {
		type: String,
		default: ''
	},
	url: {
		type: String,
		default: ''
	},
	category: {
		type: String,
		default: ''
	}
});