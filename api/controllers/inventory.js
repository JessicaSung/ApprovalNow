// Modules
// ===============================================
const express = require('express');
const mongoose = require('mongoose');

const Inventory = require('../models/Inventory');
const Supplyrequest = require('../models/Supplyrequest');

const router = express.Router();


// Routes
// ===============================================
router.get('/', function(req, res) {
   Inventory.find({}).exec((err, doc) => {
       if (err) { console.log(err) }
       else { res.json(doc) }
   });
});

router.post('/supplyrequest', function(req, res) {
	// const newOrder = new Supplyrequest(req.body);
	// console.log(req.body);
	const inventory = req.body.inventory;
	const inventoryArray = [];
	inventory.forEach((data) => {
		if (parseInt(data.qty) > 0) {
			inventoryArray.push(data);
			// console.log(Supplyrequest.collection);
		}
	});
Supplyrequest.collection.insert({inventory: inventoryArray});
		// console.log(inventoryArray);
		
		// // inserts each item into a new document
		// console.log(data);
		// if (parseInt(data.qty) > 0 ) {
		// 	Supplyrequest.insertMany([{
		// 		item: data.item,
		// 		qty: data.qty
		// 	}]);

			// inserts one item only
			// const newOrder = new Supplyrequest(data);
			// newOrder.save(function(err, doc) {
				// if (err) { console.log(err) }
				// else { res.json(doc);
					// console.log(doc); }
			// });	
		// }
	
});

router.get('/supplyrequest', function(req, res) {
	Supplyrequest.find({}).exec((err, docs) => {
		if (err) { console.log(err) }
       	else { res.json(docs[docs.length - 1]) }
	});
});


// Module Exports
// ===============================================
module.exports = router;