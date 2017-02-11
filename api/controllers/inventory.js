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
	// console.log(req.body.inventory);
	const inventory = req.body.inventory;
	inventory.forEach((data) => {
		if (parseInt(data.qty) > 0 ) {
			const newOrder = new Supplyrequest(data);
				newOrder.save(function(err, doc) {
					if (err) { console.log(err) }
       				else { res.json(doc);
       				console.log(doc); }
				});	
		}
	})

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