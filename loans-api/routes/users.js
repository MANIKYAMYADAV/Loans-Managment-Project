var express = require('express');
var router = express.Router();


var mongoose = require("mongoose");//step 1
//step 2 is to create the properties file...
var dbURL = require("../properties").DB_URL;//step 3
mongoose.connect(dbURL,{useUnifiedTopology:true,useNewUrlParser:true});//step 4

mongoose.connection.on("connected",()=>{
  console.log("Connected to MongoDB using Mongoose JS");
});

router.use('/',(req,res,next)=>{
  req.headers["content-type"]='application/json';
  console.log("Api call recieved");
  next();
})


/* GET users listing. */
router.get('/get', function(req, res, next) {
  const users = {
    name:"Manikyam Gaddamidi",
    role:"Software Developer",
    salary:50000,
    status:true
  }

  res.send("Headers Received"+ req.headers["content-type"]);
  res.send('respond with a resource');
  // console.log('respond with a resource' ,'+' ,users.name,'+',users.role,'+',users.salary,'+',users.status);
  next();
});

router.use('/',(req,res,next)=>{
  console.log("Api call Ended");
})



module.exports = router;
