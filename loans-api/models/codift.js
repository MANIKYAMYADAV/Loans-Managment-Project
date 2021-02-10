const mongoose = require("mongoose");

var codiftSchema = mongoose.Schema({
    title:String,
    description:String,
    maxNumberOfStudents:Number,
    type:String,
    start:Date,
    end:Date
  })
  
   var CodiftModel  = mongoose.model("Codift",codiftSchema);
   
   module.exports = CodiftModel;