const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true
	},
	upvotes: Number,
	body: String,
})    



module.exports = commentSchema;