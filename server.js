const express = require('express')
const app = express();


require('./db/db.js')


const homeController = require('./controllers/home.js');
app.use('/home', homeController);
const level2Controller = require('./controllers/level2.js');
app.use('/level2', level2Controller);


app.get('', (req,res)=>{
  res.redirect('/home')
});


app.get('*', (req,res)=>{
  res.send('404 webpage not found');
});





app.listen(3000, ()=>{
  console.log("Server is listening on port 3000")
})