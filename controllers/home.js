const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../models/user.js');
const Post = require('../models/post.js');

router.get('/', (req,res)=>{
  Post.find({}, (err, foundPosts)=>{
    res.render('home.ejs', {
      posts:foundPosts
    });
  })
});

router.post('/', (req,res)=>{
  //the first step is to find the user in the db 
  user.findOne({username:req.body.username}, (err,user)=>{
    if(user){
      //we need to compare the password
      if(bcrypt.compareSync(req.body.password, user.password)){
        req.session.username = req.body.username;
        req.session.logged = true;
        req.session.message = '';
        res.redirect('/home');//this might be changed 
      } else{
        req.session.message = 'The username or password you have entered is incorrect';
        res.redirect('/home');//this might be changes
      }//the end of our nested else 
    } else {
      console.log("This is the error encountered", err);
      req.session.message = 'The username or password you have entered is incorrect';
      res.redirect('/home')//this is possibly going to be changed 
    }
  });

  res.render('home.ejs');

});

router.get('/register', (req,res)=>{
  console.log(req.session)
  res.render('register.ejs')
});

router.post('register', (req,res)=>{
  //step 1 hash the password
  //were setting the password the user entered to password variable
  const password = req.body.password;
  //now using bcrypt were encrypting the password
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  //now creating an entry into the db with the password hash
  const userDatabaseEntry = {
    username: req.body.username,
    password: passwordHash
  }

  user.create(userDatabaseEntry, (err, user)=>{
    console.log(user, "This is the user");
    //now that the user has been created its time to set the session
    console.log(req.session, "this is in our post route");
    req.session.username = req.body.username;
    req.session.logged = true;
    console.log(req.session, "After we edited the properties")
    res.redirect('/home');
  });


});


router.get('/about', (req,res)=>{
  // res.send('working')
  res.render('about.ejs')
})

module.exports = router;