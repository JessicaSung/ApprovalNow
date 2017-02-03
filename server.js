// DEPENDENCIES
// ===============================================
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');



const PORT = process.env.PORT || 3000;


// SETUP EXPRESS SERVER
// ===============================================
const app = express();

// body-parser to make the data easier to work with; morgan for logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// makes public folder a static directory
app.use(express.static('public'));




// MONGOOSE DATABASE CONFIGURATION
// ===============================================
// local MongoDB
const databaseuri = 'mongodb://localhost/ApprovalDB';

// if Heroku mLab exists, use Heroku database
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
} // else, use local MongoDB database
else {
	mongoose.connect(databaseuri);
}

const db = mongoose.connection;
// if there is an error connecting to the database, show error
db.on('error', function(error) {
	console.log('Mongoose Error: ' , error);
});
// if connected to the database successfully, notify user
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// routing -------------------------------------------
const auth = require('./api/routes/auth');
app.use('/auth', auth);

// START SERVER LISTEN
// ===============================================
app.listen(PORT, () => {
	console.log('Server started on port: ', PORT);
});