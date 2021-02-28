const mongoose = require("mongoose");

var paymentSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    phone:String,
    email:String,
    amount:String
  })
  
   const PaymentModel  = mongoose.model("Payments",paymentSchema);
  
  
   module.exports = PaymentModel;