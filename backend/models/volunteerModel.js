import mongoose from "mongoose";

const volunteerSchema = mongoose.Schema({

    volunteerName:{
        type: String,
        required: true
    },

    volunteerAge:{
        type: String,
        required: true
    },

    volunteerPhoto:{
        type: String,
        required:true
    },

    volunteerID:{
        type: String,
        required:true
    }
})

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;