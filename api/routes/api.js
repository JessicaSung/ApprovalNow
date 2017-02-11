// Modules
// ===============================================
const express = require('express');

const router = express.Router();


// Controllers
// ===============================================
const inventoryRoute = require('../controllers/inventory');


// Dependencies
// ===============================================
router.use('/inventory', inventoryRoute);


// Module Exports
// ===============================================
module.exports = router;