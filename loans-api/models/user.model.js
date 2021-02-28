const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    role:String
  })
  
   const UserModel  = mongoose.model("Users",userSchema);
  
  
   module.exports = UserModel;