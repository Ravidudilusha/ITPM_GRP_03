import express from "express";
import Donation from "../models/donationModel.js";
const router = express.Router();

//add donation
router.route("/add").post((req, res) => {
    const nameOnCard = req.body.nameOnCard;
    const amount = req.body.amount;
    const address = req.body.address;
    const cardNumber = req.body.cardNumber;
    const expireDate = req.body.expireDate;
    const cvv = req.body.cvv;
  
    const newDonation = new Donation({
        nameOnCard,
        amount,
        address,
        cardNumber,
        expireDate,
        cvv,
    });
  
    newDonation
      .save()
      .then(() => {
        res.json("Donation has made");
      })
      .catch((err) => {
        console.log(err);
      });
  });


//add
// router.post('/add', async(req,res) => {
//     let newDonation = Donation(req.body);

//     await newDonation.save().then(()=>{
//         res.json("Donation has made")
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

//get
router.get('/', async(req,res)=>{

    await Donation.find().then((Donation)=>{
        res.json(Donation)
    }).catch((err)=>{
        console.log(err)
    })
});

//Update
router.put("/update/:id", async(req,res) =>{
    let donationId = req.params.id;

    const update = await Donation.findByIdAndUpdate(donationId, req.body).then(()=>{
        res.status(200).send({status:"Donation Details Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with Updating Data",error:err.message});
    })
});

//Delete
router.delete('/delete/:id', async(req,res)=>{
    let donationId = req.params.id;

    await Donation.findByIdAndDelete(donationId).then(()=>{
        res.status(200).send({status:"Donation details deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete Donation", errpr:err.message});
    })

});

//Get a specific donation
router.get('/get/:id', async(req,res)=>{
    let donationId = req.params.id;

    const donation = await Donation.findById(donationId).then((donation)=>{
        res.status(200).send({status:"Donation Fetched", donation});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Donation",error:err.message});
        
    })
});

export default router;