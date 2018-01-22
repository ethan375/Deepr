const express = require('express')
const app = express();

// MIDDLEWARE
app.use(express.static('public'));

// CONTROLLERS
const homeController = require('./controllers/home.js');
app.use('/home', homeController);


// ROUTES
app.get('/', (req,res)=>{
  res.redirect('/home')
});

app.get('*', (req,res)=>{
  res.send('404 webpage not found');
});



app.listen(3000, ()=>{
  console.log("Server is listening on port 3000")
})