const express = require('express');

const router = express.Router();


// Controllers
const inventoryRoute = require('../controllers/inventory');


// Routes
router.use('/inventory', inventoryRoute);


module.exports = router;