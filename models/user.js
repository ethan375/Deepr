const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
	
	username: {
		type: String,
		unique: true,
	},
	password: String,
	upvotes: Number,

})

module.exports = require()