import express from 'express';
import User from 'User';
const router = express.Router();

// router.get('/register', function(req,res){
// 	res.render('register');
// });

// router.get('/login', function(req,res){
// 	res.render('login');
// });

router.post('/register', function(req,res){
	console.log(req.body);

	// var name=req.body.name;
	// var email=req.body.email;
	// var username=req.body.username;
	// var password=req.body.password;
	// var password2=req.body.password2;

	var newUser = new User(req.body)

	newUser.save(function(err, doc) {
		if (err) {
			res.send(err);
		} else {
			res.send(doc);
		}
	});
});

module.exports = router;