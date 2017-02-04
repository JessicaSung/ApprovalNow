var express=require('express');
var router=express.Router();
var User = require('../models/User');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



// router.get('/register', function(req,res){
// 	res.render('register');
// });

// router.get('/login', function(req,res){
// 	res.render('login');
// });

router.post('/register', function(req,res){
	console.log(req.body);
    var newUser = new User(req.body);
    User.createUser(newUser, function(err, savedUser) {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log('success');
        res.send(savedUser);
      }
    })
});

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//   	User.getUserByUsername(username,function(err, user){
//   		// console.log(username);
//   		if(err) throw err;
//   		if(!user){
//   			return done(null, false, {message: 'unknown user'});
//   		}
//   		User.comparePassword(password, user.password, function(err, isMatch){
//   			// console.log(password);
//   			// console.log(user.password);
//   			if(err)throw err;
//   			if(isMatch){
//   				return done(null, user);	
//   			} else {
//   				return done(null, false, {message: 'Invalid password'});
//   			}
//   		});
//   	});
//   }));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.getUserById(id, function(err, user) {
//     done(err, user);
//   });
// });

router.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const targetUser = User.getUserByUsername(username, function(err, user) {
    if(err) { res.status(500).send(err) };
    User.comparePassword(password, user.password, function(err, isMatch) {
      if (err) { res.status(500).send(err) };
      res.status(201).send({isMatch: isMatch});
    })
  });
  console.log(req.body.username);
});



module.exports=router;