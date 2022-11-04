const {application} = require("express");
var express=require("express");
var router=express.Router();
const bcrypt=require("bcryptjs");
const jwt =require("jsonwebtoken");



let staff = require("../models/staff");


router.get('/get',(req,res) =>{
    staff.find().exec((err,staff) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStaff:staff
        });
    });
});



router.put("/update/:id",(req,res) => {
    staff.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,staff)=>{
        if(err){
         return res.status(400).json({error:err});
        }
     return res.status(200).json({
        success:"updated successfully"
    });
}
    );
});



router.delete("/delete/:id",(req,res) =>{
    staff.findByIdAndRemove(req.params.id).exec((err,deletedStaff)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesful",deletedStaff
        });
    });

    
});

router.get("/get/:id",(req,res) =>{
    let staffid=req.params.id;
    staff.findById(staffid,(err,staff)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            staff
    });
});
});


module.exports = router;