const mongoose = require("mongoose");

var auditSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:String,
    dob:String
  })
  
   const AuditModel  = mongoose.model("Audits",auditSchema);
  
  
   module.exports = AuditModel;