const {application} = require("express");
var express=require("express");
var router=express.Router();

let admin = require("../models/admin");

router.route("/").get((req,res) =>{

    admin.find().then((admin)=>{
        res.json(admin)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/upgrade/:id").put(async (req,res) => {
    let adminid = req.params.id;
    const{name,email,password,mobile,position} = req.body;

    const updateadmin = {
        name,
        email,
        password,
        mobile,
        position
    }

    const update = await admin.findByIdAndUpdate(adminid,updateadmin).then(()=>{

     res.status(200).send({status:"Admin updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "error with updateing data",error:err.message});
    })

})

router.route("/drop/:id").delete(async(req,res) =>{
    let adminid=req.params.id;

    await admin.findByIdAndDelete(adminid).then(()=>{
        res.status(200).send({status:"Admin deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"error with delete admin",error:err.message});

    })
})

router.route("/getadmin/:id").get(async(req,res) =>{
    let adminid=req.params.id;
    const Admin=await admin.findById(adminid)
    .then((Admin)=>{
        res.status(200).send({status:"user fetched" , Admin})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get admin",error:err.message});
    })
})



module.exports = router;