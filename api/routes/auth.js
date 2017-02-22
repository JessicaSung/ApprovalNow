const express = require('express');
const User = require('../models/User');
const router = express.Router();

// User sign up creates new user in database with hashed password
router.post('/register', (req,res) => {
	console.log(req.body);
 	const newUser = new User(req.body);

	User.createUser(newUser, (err, doc) => {
		if (err) {
			res.status(500).send(err);
		} else {
			console.log('success');
			res.send(doc);
		}
	});
});

// Checks to see if password input matches hashed password in database
router.post('/login', function(req, res) {
	const username = req.body.username;
	const password = req.body.password;
	const targetUser = User.getUserByUsername(username, function(err, user) {
		if (err) { 
	  		res.status(500).send(err);
		};

		User.comparePassword(password, user.password, function(err, isMatch) {
			if (err) { 
				res.status(500).send(err) 
			};

			res.status(201).send({isMatch: isMatch, name: user.name});
		});
	});
	console.log(req.body.username);
});

module.exports = router;