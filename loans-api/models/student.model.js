const mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    dob:Date,
    department:String
  })
  
   var StudentModel  = mongoose.model("Student",studentSchema);
  
  
   module.exports = StudentModel;