var express = require('express');
var router = express.Router();

var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");//step 1
const UserModel = require('../models/user.model');
const e = require('express');
//step 2 is to create the properties file...
// var dbURL = require("../properties").DB_URL;//step 3
// mongoose.connect(dbURL,{useUnifiedTopology:true,useNewUrlParser:true});//step 4

// mongoose.connection.on("connected",()=>{
//   console.log("Connected to MongoDB using Mongoose JS");
// });


/*Post Request Handler to create user oon MongoDB Using Mongoose JS */
router.post('/register',(req,res)=>{
  let userData = req.body;
  console.log(req.body);
let User = new UserModel(userData)

User.save((err,userObj)=>{
  if(err)
  {
      res.send(err);
  }
  else{
      console.log("User Form Data : ",userObj);
      let payload = {subject:userObj._id};
      let token = jwt.sign(payload,"secretKey")
      res.send({status:200,message:'User Created Successfully',user:userObj,token:token,name:userObj.name})
  }
})

})


router.post('/login',(req,res,next)=>{
  let userData = req.body;
  UserModel.findOne({email:userData.email},(err,user)=>{
    if(err){
      res.send(err);
    }
    else{
      if(!user){
        res.send({message:"Invalid Email"});
      }
      else{
        
        if(user.password!==userData.password){
          res.send("Invalid Password");
        }
        else{
          let payload = {subject:user._id}
          let token = jwt.sign(payload,'secretKey')
          res.send({status:200,message:'User Created Successfully',user:user,token:token})
        }
      }
    }
  })
})


router.post('/sign',(req,res,next)=>{
     console.log("User Credencials : ",req.body);

  const name =req.body.name;

  UserModel.findOne({name:name},(err,userObj)=>{
 if(err){
   res.send("Error in finding user",err);
 }
 else if(userObj==null){
   res.send({message:"Invalid UserName"});
 }

 //if username is mathced, compare password...
 else{
   const password = req.body.password;
   bcrypt.compare(password,userObj.password,(err,isMatched)=>{
     if(err){
       res.send("Error in Matching password",err);
     }
     if(isMatched==false){
       res.send({message:"Invalid Password"});
     }
     // if password also matched, then create sign and send token to client....

     else{
       jwt.sign({name:userObj.name},'ssshhh',{expiresIn:60},(err,signedToken)=>{
         if(err){
           res.send("Error in generating token",err);
         }
         else{
           res.send({message:"Logged in Successfully",token:signedToken,name:userObj.name})
         }
       })
     }
   })
   
 }


 });
  
})


// router.use('/',(req,res,next)=>{
//   req.headers["content-type"]='application/json';
//   console.log("Api call recieved");
//   next();
// })


/* GET users listing. */
// router.get('/get', function(req, res, next) {
//   const users = {
//     name:"Manikyam Gaddamidi",
//     role:"Software Developer",
//     salary:50000,
//     status:true
//   }

//   res.send("Headers Received"+ req.headers["content-type"]);
//   res.send('respond with a resource');
//   // console.log('respond with a resource' ,'+' ,users.name,'+',users.role,'+',users.salary,'+',users.status);
//   next();
// });

// router.use('/',(req,res,next)=>{
//   console.log("Api call Ended");
// })



module.exports = router;
