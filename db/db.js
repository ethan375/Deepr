const mongoose = require('mongoose');


mongoose.connect(process.env.DB_HOST);

mongoose.connection.on('connected', ()=>{
  console.log("Connected to the DB");
});

mongoose.connection.on('disconnected', ()=>{
  console.log("Disconnected from the DB");
});

mongoose.connection.on('error', (error)=>{
  console.log("There was an error connecting to the db", error);
});