const mongo = require('mongodb');
const mongoose = require('mongoose');
const Inventory = require('../api/models/Inventory.js');

const databaseuri = 'mongodb://localhost/ApprovalDB';

if (process.env.MONGODB_URI) {
	console.log('Connection to ', process.env.MONGODB_URI);
	mongoose.connect(process.env.MONGODB_URI);
} else {
	console.log('Connecting to ', databaseuri);
	mongoose.connect(databaseuri);
}

mongoose.Promise = Promise;
const db = mongoose.connection;

db.on('error', function(error) {
	console.log('Mongoose Error: ' , error);
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});


var rawDocuments = [
	{item:"3x3 Post It",qty:0},
	{item:"AA batteries",qty:0},
	{item:"AAA batteries",qty:0},
	{item:"antibiotic cream",qty:0},
	{item:"big rubber bands",qty:0},
	{item:"black pens",qty:0},
	{item:"black refill ink",qty:0},
	{item:"blue pens",qty:0},
	{item:"blue refill ink",qty:0},
	{item:"business card protectors",qty:0},
	{item:"copier paper",qty:0},
	{item:"envelopes",qty:0},
	{item:"erasers",qty:0},
	{item:"facial tissue",qty:0},
	{item:"file folder labels",qty:0},
	{item:"file folders",qty:0},
	{item:"forks",qty:0},
	{item:"glue sticks",qty:0},
	{item:"hanging folders",qty:0},
	{item:"highlighters",qty:0},
	{item:"invisible tape",qty:0},
	{item:"junior white legal pads",qty:0},
	{item:"junior yellow legal pads",qty:0},
	{item:"knives",qty:0},
	{item:"large binder clips",qty:0},
	{item:"large manila envelopes",qty:0},
	{item:"large paper clips",qty:0},
	{item:"medium binder clips",qty:0},
	{item:"medium paper clips",qty:0},
	{item:"packing tape",qty:0},
	{item:"panel hooks",qty:0},
	{item:"paper towels",qty:0},
	{item:"pencils",qty:0},
	{item:"red pens",qty:0},
	{item:"red refill ink",qty:0},
	{item:"sheet protectors",qty:0},
	{item:"small binder clips",qty:0},
	{item:"small manilia envelopes",qty:0},
	{item:"small paper clips",qty:0},
	{item:"small Post It",qty:0},
	{item:"spiral notebooks",qty:0},
	{item:"spoons",qty:0},
	{item:"staples",qty:0},
	{item:"T-pins",qty:0},
	{item:"white legal pads",qty:0},
	{item:"White Out",qty:0},
	{item:"yellow legal pads",qty:0}
];

Inventory.insertMany(rawDocuments)
.then(function(mongooseDocuments) {
	console.log(mongooseDocuments);
}).catch(function(err) {
	console.log("Error inserting collections.")
});