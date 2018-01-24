const mongoose = require('mongoose');
const Comment = require('./comment.js')
// console.log(Comment, ' this is comment')
const postSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true,
	},
	title: String,
	body: String,
	votes: Number,
	comments: [Comment]
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;