const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema({
	item: {
		type: String
	},
	qty: {
		type: Number
	}
});

module.exports = mongoose.model('Inventory', InventorySchema);