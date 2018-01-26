const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');
const Page = require('../models/page.js');


router.get('/', (req,res)=>{
  res.render('level2.ejs')
});








module.exports = router;