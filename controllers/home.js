const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
  res.send('the home route is working correctly');
  // res.render('home.ejs');
});


module.exports = router;