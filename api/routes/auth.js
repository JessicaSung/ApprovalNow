const express = require('express');
const User = require('../models/User');
const router = express.Router();

// router.get('/register', function(req,res){
// 	res.render('register');
// });

// router.get('/login', function(req,res){
// 	res.render('login');
// });

router.post('/register', (req,res) => {
	console.log(req.body);

	// var name=req.body.name;
	// var email=req.body.email;
	// var username=req.body.username;
	// var password=req.body.password;
	// var password2=req.body.password2;

	const newUser = new User(req.body)

	newUser.save((err, doc) => {
		if (err) {
			res.send(err);
		} else {
			res.send(doc);
		}
	});
});

module.exports = router;