const express = require('express');
const router = express.Router();


// ROUTES
//home
router.get('/', (req,res)=>{
  res.render('home.ejs');
});

//register
router.get('/register', (req,res)=>{
  // res.render('register.ejs')
});

router.post('register', (req,res)=>{

});

//login
router.get('/login', (req,res)=>{
  // res.render('login.ejs')
});

router.post('login', (req,res)=>{

});

//about
router.get('/about', (req,res)=>{
  res.render('about.ejs')
})

module.exports = router;