const mongoose = require('mongoose'); 
const Post = require('./post.js');

const pageSchema = new mongoose.Schema({
	
	title: {
		type: String,
		unique: true,
	},
	genre: String,
	posts: [Post.schema]

})

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;