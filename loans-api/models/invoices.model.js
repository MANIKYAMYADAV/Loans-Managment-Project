const mongoose = require("mongoose");

var invoiceSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:String,
    dob:String
  })
  
   const InvoiceModel  = mongoose.model("Invoices",invoiceSchema);
  
  
   module.exports = InvoiceModel;