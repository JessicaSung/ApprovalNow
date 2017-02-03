var express=require('express');
var router=express.Router();
var User = require('../models/User');

// router.get('/register', function(req,res){
// 	res.render('register');
// });

// router.get('/login', function(req,res){
// 	res.render('login');
// });

router.post('/register', function(req,res){
	console.log(req);

	var name=req.body.name;
	var email=req.body.email;
	var username=req.body.username;
	var password=req.body.password;
	// var password2=req.body.password2;

	var newUser = new User({
		name: name,
		email: email,
		username:username,
		password: password,
		// password2: password2
	})

	newUser.save(function(err, doc) {
		if (err) {
			res.send(err);
		} else {
			res.send(doc);
		}
	});
});

module.exports=router;