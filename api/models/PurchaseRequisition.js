const mongoose = require('mongoose');

const PurchaseRequisitionSchema = mongoose.Schema({
	transID: {
		type: String
	},
	approvers: {
		type: Array
	},
	inventory: {
		type: Array
	}
});

module.exports = mongoose.model('PurchaseRequisition', PurchaseRequisitionSchema);