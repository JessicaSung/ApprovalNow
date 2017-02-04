const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');
var UserSchema = mongoose.Schema({
	name: {
		type: String,
		index:true
	},
	email:{
		type:String,
	},
	username: {
		type: String,
	},
	password: {
		type: String,
	}

});


var User = module.exports = mongoose.model('User', UserSchema);
module.exports.createUser= function(newUser, callback){
	var bcrypt = require('bcryptjs');
	bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
         newUser.password = hash;
         newUser.save(callback);
    });
});

}

module.exports.getUserByUsername=function(username, callback){
	var query = {"username": username};
	User.findOne(query, callback);
}

module.exports.getUserByID=function(id, callback){
	
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword,hash, function(err, isMatch){
		if(err) { callback(err, false) }
		callback(null, isMatch);
	});
}