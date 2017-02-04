// DEPENDENCIES
// ===============================================

const path = require('path');
const cookieParser = require('cookie-parser');
const expressValidator = require ('express-validator');
const flash = require('connect-flash');
const session=require('express-session');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const mongo=require('mongodb');
const mongoose = require('mongoose');



const PORT = process.env.PORT || 3000;


// SETUP EXPRESS SERVER
// ===============================================
const app = express();

// body-parser to make the data easier to work with; morgan for logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// makes public folder a static directory
app.use(express.static('public'));

// Express Session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function(req, res,next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});

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
var auth = require('./api/routes/auth');
app.use('/auth', auth);

// START SERVER LISTEN
// ===============================================
app.listen(PORT, () => {
	console.log('Server started on port: ', PORT);
});