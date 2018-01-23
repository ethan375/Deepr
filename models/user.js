const mongoose = require('mongoose');
const Post = require('./post.js'); 
const Comment = require('./comment.js')

const userSchema = new mongoose.Schema({
	
	username: {
		type: String,
		unique: true,
	},
	password: String,
	upvotes: Number,
	posts: [Post.schema],
	comments: [Comment]
});

const User = mongoose.model('User', userSchema);

module.exports = User;