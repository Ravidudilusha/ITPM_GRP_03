import express from "express";
import Volunteer from "../models/volunteerModel.js";
const router = express.Router();

// add
router.post('/add', async(req,res) => {
    let newVolunteer = Volunteer(req.body);

    await newVolunteer.save().then(()=>{
        res.json("Volunteer details added successfully")
    }).catch((err)=>{
        console.log(err);
    });

});

//get
router.get('/', async(req,res)=>{

    await Volunteers.find().then((Volunteer)=>{
        res.json(Volunteer)
    }).catch((err)=>{
        console.log(err)
    })

});

//Update
router.put("/update/:id", async(req,res) =>{
    let volunteerId = req.params.id;
  
    const update = await Volunteer.findByIdAndUpdate(volunteerId, req.body).then(()=>{
        res.status(200).send({status:"Volunteer details updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })

});

//Delete
router.delete('/delete/:id', async(req,res)=>{
    let volunteerId = req.params.id;

    await Volunteer.findByIdAndDelete(volunteerId).then(()=>{
        res.status(200).send({status:"Volunteer details deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete Volunteer", errpr:err.message});
    })

});

//Get a specific volunteer
router.get('/get/:id', async(req,res) =>{
    let volunteerId = req.params.id;

    const volunteer = await Volunteer.findById(volunteerId).then((volunteer)=>{
        res.status(200).send({status:"User fetched", volunteer});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message});
    })
});

export default router;