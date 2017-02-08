// DEPENDENCIES
// ===============================================
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
// const expressValidator = require ('express-validator');
// const flash = require('connect-flash');
// const LocalStrategy=require('passport-local').Strategy;
const logger = require('morgan');
const mongo = require('mongodb');
const mongoose = require('mongoose');
// const passport=require('passport');
// const path = require('path');
const Promise = require('bluebird');
// const session=require('express-session');

const Inventory = require('./api/models/Inventory.js');

const PORT = process.env.PORT || 3000;


// SETUP EXPRESS SERVER
// ===============================================
const app = express();

// body-parser to make the data easier to work with; morgan for logging
// value can be a string or array (when extended is false), or any type (when extended is true)
app.use(logger('dev'));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// makes public folder a static directory
app.use(express.static('public'));


// MONGOOSE DATABASE CONFIGURATION
// ===============================================
// local MongoDB
const databaseuri = 'mongodb://localhost/ApprovalDB';

// this executes if the app is executed on Heroku
if (process.env.MONGODB_URI) {
	console.log('Connection to ', process.env.MONGODB_URI)
	mongoose.connect(process.env.MONGODB_URI);
} // this executes if the app is executed on local machine
else {
	console.log('Connecting to ', databaseuri)
	mongoose.connect(databaseuri);
}

mongoose.Promise = Promise;
const db = mongoose.connection;
// if there is an error connecting to the database, show error
db.on('error', function(error) {
	console.log('Mongoose Error: ' , error);
});
// if connected to the database successfully, notify user
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// ROUTING
// ===============================================
var auth = require('./api/routes/auth');
app.use('/auth', auth);

// Route for GET request
app.get("/supplyform", function(req, res) {
   // find and retrieve all records
   Inventory.find({}).exec((err, doc) => {
       if (err) { console.log(err) }
       else { 
       		res.json(doc) ;
       		console.log(doc);
       	}
   });
});


// START SERVER LISTEN
// ===============================================
app.listen(PORT, () => {
	console.log('Server started on port: ', PORT);
});