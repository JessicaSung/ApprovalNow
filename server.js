// DEPENDENCIES
// ===============================================
const bluebird     = require('bluebird');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const logger       = require('morgan');
const mongo        = require('mongodb');
const mongoose     = require('mongoose');

const Inventory    = require('./api/models/Inventory.js');

const PORT = process.env.PORT || 3000;


// SETUP EXPRESS SERVER
// ===============================================
const app = express();

app.use(logger('dev'));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public'));


// MONGOOSE DATABASE CONFIGURATION
// ===============================================
const databaseuri = 'mongodb://localhost/ApprovalDB';

// Connect to Heroku database if possible; otherwise, use local DB
if (process.env.MONGODB_URI) {
	console.log('Connecting to ', process.env.MONGODB_URI);
	mongoose.connect(process.env.MONGODB_URI);
} else {
	console.log('Connecting to ', databaseuri);
	mongoose.connect(databaseuri);
}

mongoose.Promise = bluebird;
const db = mongoose.connection;
// show error if there's a problem connecting to DB
db.on('error', function(error) {
	console.log('Mongoose Error: ' , error);
});
// notify user on successful DB connection
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// ROUTING
// ===============================================
const auth = require('./api/routes/auth');
app.use('/auth', auth);

const api = require('./api/routes/api');
app.use('/api', api);


// Connection to PORT
// ===============================================
app.listen(PORT, () => {
	console.log('Listening On Port: ', PORT);
});