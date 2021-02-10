var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const { response } = require('../app');
const CodiftModel = require('../models/codift');

//update request hanler.....but can update many fields basde on one condition
router.put('/update',(req,res,next)=>{
     
    const type =req.query.type;

    CodiftModel.updateMany({maxNumberOfStudents:50},{type:type},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})

//update the user  based on unique or particular ID...
router.put('/updateUser',(req,res,next)=>{
     
    const id =req.query.id;
    const desc =req.query.description;

    CodiftModel.findByIdAndUpdate(id,{description:desc},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})

//update the user based on particular one and can update it....
router.put('/updateOne',(req,res,next)=>{
     
    const type=req.query.type;
    const titleName =req.query.title;

    CodiftModel.findOneAndUpdate({type:type},{title:titleName},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})

//delete user based on ID

router.delete('/deleteUser',(req,res,next)=>{
     
    const id=req.query.id;
    
    CodiftModel.findByIdAndDelete(id,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})

//get all user's list from database using find()....
router.get('/list',(req,res,next)=>{

    CodiftModel.find((err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,resultsFound:response.length,students:response})
    }
   });
    
})

//get users based on search using find()....
router.get('/searchByTitle',(req,res,next)=>{
     
    const titleQuery =req.query.title;

    CodiftModel.find({title:titleQuery},(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,resultsFound:response.length,students:response})
    }
   });
    
})


//get user by ID.....
router.get('/searchById',(req,res,next)=>{
     
    const idQuery =req.query.id;

    CodiftModel.findById(idQuery,(err,response)=>{
    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,students:response})
    }
   });
    
})


//Add user using save().....
router.post('/add',(req,res,next)=>{
    console.log(req.body);
    let newUser = new CodiftModel({
        title:req.body.title,
        description:req.body.description,
        maxNumberOfStudents:req.body.maxNumberOfStudents,
        type:req.body.type,
        start:req.body.start,
        end:req.body.end
    })
   newUser.save((err,newUser)=>{

    if(err)
    {
        res.send(err);
    }
    else{
        res.send({status:200,message:'Student Added Successfully',userObj:newUser})
    }
   });
    
})

//exporting the module to available for other modules if required.......
module.exports = router;
