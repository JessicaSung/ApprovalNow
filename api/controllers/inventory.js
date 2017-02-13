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
	const inventory = req.body.inventory;
	const inventoryArray = [];

	inventory.forEach((data) => {
		if (parseInt(data.qty) > 0) {
			inventoryArray.push(data);
		}
	});
	
	Supplyrequest.collection.insert({ inventory: inventoryArray });
});

router.get('/supplyrequest', function(req, res) {
	Supplyrequest.find({}).sort({_id:-1}).limit(1).exec((err, docs) => {
		if (err) { console.log(err) }
       	else { res.json(docs[docs.length - 1]) }
	});
});


// Module Exports
// ===============================================
module.exports = router;