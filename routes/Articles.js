const {application} = require("express");
var express=require("express");
var router=express.Router();
const bcrypt=require('bcryptjs');
const jwt =require("jsonwebtoken");



let article = require("../models/article");


router.get('/get',(req,res) =>{
    article.find().exec((err,article) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingArticle:article
        });
    });
});



router.put("/update/:id",(req,res) => {
    article
    article.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,article)=>{
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
    article.findByIdAndRemove(req.params.id).exec((err,deletedArticle)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesful",deletedArticle
        });
    });

    
});

router.get("/get/:id",(req,res) =>{
    let articleid=req.params.id;
    article.findById(articleid,(err,article)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            article
    });
});
});

// router.post("/upload-image",async(req,res)=>{
//     const{base64}=req.body;
//     try{
//     Images.create({image:base64});

//     res.send({Status:"ok"})

//     }catch(error){
//         res.send({Status:"error",data:error});
//     }
// })


module.exports = router;