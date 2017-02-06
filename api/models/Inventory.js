const mongoose = require('mongoose');

const Inventory = mongoose.Schema({
	_id: {
		type: String,
		index: true
	},
	item: {
		type: String
	},
	qty: {
		type: Number
	}
});

module.exports = mongoose.model('Inventory', Inventory);