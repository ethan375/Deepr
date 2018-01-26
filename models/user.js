const mongoose = require('mongoose');
const Post = require('./post.js'); 
const Comment = require('./comment.js');
const Page= require('./page.js');

const userSchema = new mongoose.Schema({
	
	username: {
		type: String,
		unique: true,
	},
	password: String,
	score: Number,
	pages: [Page],
	posts: [Post.schema],
	comments: [Comment],
	upvotes: [],
	downvotes: []

});

const User = mongoose.model('User', userSchema);

module.exports = User;