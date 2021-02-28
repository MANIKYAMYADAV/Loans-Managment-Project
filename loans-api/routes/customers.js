var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { response } = require('../app');
const CustomerModel = require('../models/customers.model');


//get request...through handler....

router.get('/',(req,res,next)=>{
    res.send('Students Response with a request resource');
})

router.put('/edit',(req,res,next)=>{
     
    const emailAddress =req.query.emailAddress;

    CustomerModel.updateMany({phoneNumber:8565844192},{emailAddress:emailAddress},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})


router.put('/update',(req,res,next)=>{
     
    const id =req.body.id;
    const customerObj = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        emailAddress:req.body.emailAddress,
        dob:req.body.dob,
        phoneNumber:req.body.phoneNumber
    }
    // const phoneNumber =req.query.phoneNumber;

    CustomerModel.findByIdAndUpdate(id,customerObj,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,message:"Customer Updated Successfully",customer:customerObj})
    }
   });
    
})

router.put('/updateOne',(req,res,next)=>{
     
    const phoneNumber=req.query.phoneNumber;
    const emailAddress =req.query.emailAddress;

    CustomerModel.findOneAndUpdate({phoneNumber:phoneNumber},{emailAddress:emailAddress},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})

router.delete('/delete',(req,res,next)=>{
     
    const id=req.query.id;
    

    CustomerModel.findByIdAndDelete(id,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,customer:response})
    }
   });
    
})





router.get('/list',(req,res,next)=>{

    CustomerModel.find((err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,resultsFound:response.length,customers:response})
    }
   });
    
})


router.get('/searchByFirstName',(req,res,next)=>{
     
    const firstNameQuery =req.query.firstName;

    CustomerModel.find({firstName:firstNameQuery},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,resultsFound:response.length,customers:response})
    }
   });
    
})

router.get('/searchById',(req,res,next)=>{
     
    const idQuery =req.query.id;

    CustomerModel.findById(idQuery,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,customer:response})
    }
   });
    
})



router.post('/add',(req,res,next)=>{
    console.log(req.body);
    let newCustomer = new CustomerModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        emailAddress:req.body.emailAddress,
        dob:req.body.dob,
        phoneNumber:req.body.phoneNumber
    })
    newCustomer.save((err,newCustomer)=>{

    if(err)
    {
        res.send(err);
    }
    else{
        console.log("Customer Form Data : ",newCustomer)
        res.send({status:200,message:'Customer Added Successfully',customerObject:newCustomer})
    }
   });
    
})


module.exports = router;
