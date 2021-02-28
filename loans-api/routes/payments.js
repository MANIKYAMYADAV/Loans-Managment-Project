var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { response } = require('../app');
const PaymentModel = require('../models/payments.model');



router.put('/update',(req,res,next)=>{
     
    const id =req.body.id;
    const paymentObj = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        amount:req.body.amount,
        email:req.body.email
    }

    PaymentModel.findByIdAndUpdate(id,paymentObj,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,message:"Payment Updated Successfully",payment:paymentObj})
    }
   });
    
})




router.put('/updatePayment',(req,res,next)=>{
     
    const id =req.query.id;
    const amount =req.query.amount;

    PaymentModel.findByIdAndUpdate(id,{amount:amount},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,payment:response})
    }
   });
    
})

router.put('/updateOne',(req,res,next)=>{
     
    const firstName=req.query.firstName;
    const amount =req.query.amount;

    PaymentModel.findOneAndUpdate({firstName:firstName},{amount:amount},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,payment:response})
    }
   });
    
})

router.delete('/delete',(req,res,next)=>{
     
    const id=req.query.id;
    

    PaymentModel.findByIdAndDelete(id,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,payment:response})
    }
   });
    
})


router.get('/list',(req,res,next)=>{

    PaymentModel.find((err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,resultsFound:response.length,payment:response})
    }
   });
    
})


router.get('/searchByFirstName',(req,res,next)=>{
     
    const firstNameQuery =req.query.firstName;

    PaymentModel.find({firstName:firstNameQuery},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,resultsFound:response.length,payment:response})
    }
   });
    
})

router.get('/searchById',(req,res,next)=>{
     
    const idQuery =req.query.id;

    PaymentModel.findById({id:idQuery},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,payment:response})
    }
   });
    
})



router.post('/add',(req,res,next)=>{
    console.log(req.body);
    let newPayment = new PaymentModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        amount:req.body.amount
    })
    newPayment.save((err,payment)=>{

    if(err)
    {
        res.send(err);
    }
    else{
        console.log("Payment Form Data : ",payment)
        res.send({status:200,message:'Payment Added Successfully',payment:payment})
    }
   });
    
})


module.exports = router;
