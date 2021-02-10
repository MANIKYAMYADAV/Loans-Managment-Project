const mongoose = require("mongoose");

var loanSchema = mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:Number,
    loanIssueDate:Date,
    loanStatus:String
  })
  
   const LoanModel  = mongoose.model("Loans",loanSchema);
  
  
   module.exports = LoanModel;