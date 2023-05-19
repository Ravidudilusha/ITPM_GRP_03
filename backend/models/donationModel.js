import mongoose from "mongoose";

const donationSchema = mongoose.Schema({

    nameOnCard:{
        type: String,
        required: true
    },

    amount:{
        type: Number,
        required:true
    },

    address:{
        type: String,
        required: true
    },

    cardNumber:{
        type: Number,
        required: true
    },

    expireDate:{
        type: String,
        required: true
    },

    cvv:{
        type: Number,
        required: true
    }
})

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
