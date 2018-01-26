const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
<<<<<<< HEAD
const port = process.env.PORT;
=======
const port = process.env.PORT
>>>>>>> ba23e886ee279f36fdf979628ebf7c57314ff2c4


require('dotenv').config()

require('./db/db.js')


// MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(session({
  secret:'the secret string',
  resave:false,
  saveUninitialized:false
}));
app.use(methodOverride('_method'));

// CONTROLLERS
const homeController = require('./controllers/home.js');
app.use('/home', homeController);
const level2Controller = require('./controllers/level2.js');
app.use('/level2', level2Controller);


// ROUTES
app.get('/', (req,res)=>{
  res.redirect('/home')
});

app.get('*', (req,res)=>{
  res.send('404 webpage not found');
});



app.listen(port, ()=>{
  console.log("Server is listening on port 3000")
})