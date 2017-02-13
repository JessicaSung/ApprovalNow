const mongoose = require('mongoose');

const SupplyrequestSchema = mongoose.Schema({
	inventory: {
		type: Array
	}
});

module.exports = mongoose.model('Supplyrequest', SupplyrequestSchema);