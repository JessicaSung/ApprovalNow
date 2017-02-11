// Modules
// ===============================================
const express = require('express');
const mongoose = require('mongoose');

const Inventory = require('../models/Inventory');

const router = express.Router();


// Routes
// ===============================================
router.get('/', function(req, res) {
   Inventory.find({}).exec((err, doc) => {
       if (err) { console.log(err) }
       else { res.json(doc) }
   });
});


// Module Exports
// ===============================================
module.exports = router;