const mongoose = require('mongoose');
const Comment = require('./comment.js')

const postSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true,
		unique: true
	},
	title: String,
	body: String,
	upvotes: Number,
	comments: [Comment.schema]
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;