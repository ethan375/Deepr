const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
  res.send('the home route is working correctly');
  // res.render('home.ejs');
});


router.get('/register', (req,res)=>{
  // res.render('register.ejs')
});

router.post('register', (req,res)=>{

})

router.post('/', (req,res)=>{

});

router.get('/about', (req,res)=>{
  // res.send('working')
  res.render('about.ejs')
})

module.exports = router;