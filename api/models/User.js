const mongoose = require('mongoose');

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


// module.exports.createUser= function(newUser, callback){
// 	var bcrypt = require('bcryptjs');
// 	bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//          newUser.password = hash;
//          newUsser.save(callback);
//     });
// });

// }
var User = module.exports = mongoose.model('User', UserSchema);