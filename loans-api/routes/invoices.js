var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { response } = require('../app');
const InvoiceModel = require('../models/invoices.model');

//get request...through handler....

router.get('/',(req,res,next)=>{
    res.send('Students Response with a request resource');
})

router.put('/update',(req,res,next)=>{
     
    const department =req.query.department;

    InvoiceModel.updateMany({age:26},{department:department},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})


router.put('/updateUser',(req,res,next)=>{
     
    const id =req.query.id;
    const department =req.query.department;

    InvoiceModel.findByIdAndUpdate(id,{department:department},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})

router.put('/updateOne',(req,res,next)=>{
     
    const age=req.query.age;
    const lastName =req.query.lastName;

    InvoiceModel.findOneAndUpdate({age:age},{lastName:lastName},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})

router.delete('/deleteUser',(req,res,next)=>{
     
    const id=req.query.id;
    

    InvoiceModel.findByIdAndDelete(id,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})

// router.delete('/deleteUser',(req,res,next)=>{
     
//     const id=req.query.id;
    

//     InvoiceModel.remove(id,(err,response)=>{
//     if(err)
//     {
//         res.send(err);
//     }
//     else{
//         res.send({status:200,students:response})
//     }
//    });
    
// })




router.get('/list',(req,res,next)=>{

    InvoiceModel.find((err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,resultsFound:response.length,students:response})
    }
   });
    
})


router.get('/searchByFirstName',(req,res,next)=>{
     
    const firstNameQuery =req.query.firstName;

    InvoiceModel.find({firstName:firstNameQuery},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,resultsFound:response.length,students:response})
    }
   });
    
})

router.get('/searchById',(req,res,next)=>{
     
    const idQuery =req.query.id;

    InvoiceModel.findById(idQuery,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})



router.post('/add',(req,res,next)=>{
    console.log(req.body);
    let newStudent = new InvoiceModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        email:req.body.email,
        dob:req.body.dob,
        department:req.body.department
    })
   newStudent.save((err,newStudent)=>{

    if(err)
    {
        res.send(err);
    }
    else{
        console.log("Student Form Data : ",newStudent)
        res.send({status:200,resultsFound:response.length,message:'Student Added Successfully',studObj:newStudent})
    }
   });
    
})


module.exports = router;
