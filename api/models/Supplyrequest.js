const mongoose = require('mongoose');

const SupplyrequestSchema = mongoose.Schema({
	item: {
		type: String
	},
	qty: {
		type: Number
	}
});

module.exports = mongoose.model('Supplyrequest', SupplyrequestSchema);