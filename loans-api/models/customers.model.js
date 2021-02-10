const mongoose = require("mongoose");

var customerSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:String,
    dob:String
  })
  
   const CustomerModel  = mongoose.model("Customers",customerSchema);
  
  
   module.exports = CustomerModel;