const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		index: true
	},
	email: {
		type: String,
	},
	username: {
		type: String,
	},
	password: {
		type: String,
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

// When user is created, password is encrypted before storing in database
module.exports.createUser = function(newUser, callback) {
	const bcrypt = require('bcryptjs');
	bcrypt.genSalt(10, function(err, salt) {
    	bcrypt.hash(newUser.password, salt, function(err, hash) {
			newUser.password = hash;
			newUser.save(callback);
   		});
	});
}

// Finds user in database
module.exports.getUserByUsername = function(username, callback) {
	const query = {"username": username};
	User.findOne(query, callback);
}

// module.exports.getUserByID=function(id, callback){
// 	User.findById(id, callback);
// }

// Compares input password with hashed database password,
// if they don't match, show error, otherwise log in correctly
module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword,hash, function(err, isMatch) {
		if (err) { callback(err, false) }
		callback(null, isMatch);
	});
}