const mongoose = require("mongoose");

var settingSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:String,
    dob:String
  })
  
   const SettingModel  = mongoose.model("Settings",settingSchema);
  
  
   module.exports = SettingModel;