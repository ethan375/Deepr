const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true,
		unique: true
	},
	upvotes: Number,
	body: String,
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;