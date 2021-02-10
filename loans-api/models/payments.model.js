const mongoose = require("mongoose");

var paymentSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:String,
    dob:String
  })
  
   const PaymentModel  = mongoose.model("Payments",paymentSchema);
  
  
   module.exports = PaymentModel;