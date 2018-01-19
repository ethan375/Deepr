const express = require('express')
const app = express();


const homeController = require('./controllers/home');
app.use('/home', homeController);


app.get('', (req,res)=>{
  res.redirect('/home')
});


app.get('*', (req,res)=>{
  res.send('404 webpage not found');
});





app.listen(3000, ()=>{
  console.log("Server is listening on port 3000")
})