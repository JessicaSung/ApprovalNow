// Modules
// ===============================================
const express = require('express');
const mongoose = require('mongoose');

// models
const Inventory = require('../models/Inventory');
const Supplyrequest = require('../models/Supplyrequest');

const router = express.Router();


// Routes
// ===============================================
// displays all inventory items on supply form
router.get('/', function(req, res) {
   Inventory.find({}).exec((err, doc) => {
       if (err) { console.log(err) }
       else { res.json(doc) }
   });
});

// saves inventory items user requests into new doc in supplyrequests
router.post('/supplyrequest', function(req, res) {
	const inventory = req.body.inventory;
	const inventoryArray = [];

	inventory.forEach((data) => {
		if (parseInt(data.qty) > 0) {
			inventoryArray.push(data);
		}
	});
	
	Supplyrequest.collection.insert({ inventory: inventoryArray });
	res.json({ OK: 'ok' });
});

// displays last user request (last doc in supplyrequests)
router.get('/supplyrequest', function(req, res) {
	Supplyrequest.find({}).sort({_id:-1}).limit(1).exec((err, docs) => {
		if (err) { console.log(err) }
       	else { res.json(docs[docs.length - 1]) }
	});
});

// saves purchase requisition information in new doc in purchaserequisitions
router.post('/purchaserequisition', function(req, res) {
	
});

// ADD ROUTER.GET: queries number of doc (PR) in purchaserequisitions so next PR number will show on new PR form 
router.get('/')


// Module Exports
// ===============================================
module.exports = router;