const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.js');
const Post = require('../models/post.js');



// CONTROLERS
//level2(beginner)
const level2Controller = require('./level2.js')
router.use('/level2', level2Controller)

// ROUTES
//home
router.get('/', (req,res)=>{
  Post.find({}, (err, foundPosts)=>{

    User.findById(req.session.id, (err, foundUser) =>{
      // console.log(foundUser); 
      res.render('home.ejs', {
        user: foundUser,
        posts: foundPosts,
        session: req.session,
      })
    })
  })
});




//register routes 
router.get('/register', (req,res)=>{
  console.log(req.session)
  res.render('register.ejs', {
    session: req.session,
  })
});

router.post('/register', (req,res)=>{
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
  User.create(userDatabaseEntry, (err, userCreated)=>{
    // console.log("this code is being run")
    console.log(userCreated, "This is the userCreated");
    //now that the userCreated has been created its time to set the session
    console.log(req.session, "this is in our post route");
    console.log(req.body.username);
    req.session.logged = true;
    console.log(req.session, "After we edited the properties")
    res.redirect('/home');
  });
});






//login routes 
router.get('/login', (req,res)=>{
  res.render('login.ejs', {
    session: req.session,
  });
});

router.post('/login', (req,res)=>{
    //the first step is to find the user in the db 
  User.findOne({username:req.body.username}, (err,userFound)=>{
    if(userFound){
      //we need to compare the password
      if(bcrypt.compareSync(req.body.password, userFound.password)){
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
});





//new routes 
router.get('/new', (req , res) => {
  User.findOne({username: req.session.username}, (err, foundUser) => {
    res.render('new.ejs', {
      user: foundUser,
      session: req.session,
    })
  })
});

router.post('/new', (req,res)=>{
  User.findOne({username: req.session.username}, (err, foundUser) => {
    Post.create(req.body, (error, createdPost)=>{
      foundUser.posts.push(createdPost)
      foundUser.save((err, data) => {
        res.redirect('/home')
      });
    });   
  });
});







//login routes
router.get('/login', (req,res)=>{
  res.render('login.ejs', {
    session: req.session,
  });
});

router.post('/login', (req,res)=>{
  //1st step is to search the database
  User.findOne({username:req.body.username}, (err, foundUser)=>{
    if(foundUser){
      //here we need to compare password given to pass in the db 
      //first arg is pass given 2nd is whats in the db
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        req.session.username = req.body.username;
        req.session.logged = true;
        req.session.message = '';
        res.redirect('/home');
      } else{
        req.session.message = 'The username or password are incorrect'
        res.redirect('/home/login');
      }// end of the nested else 
    }else{
      console.log('there was an error', err);
      req.session.message = 'The username or password are incorrect'
      res.redirect('/home/login');
    }//end of the parent route 
  })//end of the username search 
});//end of our login post route






//logout route 
router.get('/logout', (req,res)=>{
  req.session.destroy((err)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/home');
    };
  });
});










//show route 
router.get('/:id', (req , res) => {
  Post.findById(req.params.id, (err, foundPost) => {
    res.render('post.ejs', {
      post: foundPost,
      session: req.session
    });
  });
});










//about
router.get('/about', (req,res)=>{
  res.render('about.ejs')
})









// upvoting
router.post('/vote/:id', (req,res)=>{
  console.log("this route being hit but not fully working")
  Post.findByIdAndUpdate({id:req.params.id}, (err, foundPost)=>{
    console.log(foundPost)
  })
})

//downvoting
router.post('/downvote/:id', (req,res)=>{
  console.log("this route being hit")
  Post.findByIdAndUpdate({id:req.params.id}, (err, foundPost)=>{
    console.log(foundPost);
    foundPost.save((err, savedFoundPost)=>{
      if(err){
        console.log(err)
      }else{
        console.log(savedFoundPost)
      }
    })
  })
})



module.exports = router;