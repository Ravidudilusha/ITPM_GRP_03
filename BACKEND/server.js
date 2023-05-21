//declare variables - Dependencies assign variables//

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//Create variable to Define port//
const PORT = process.env.PORT || 8090;


app.use(cors());
app.use(bodyParser.json());

//connect database//
const URL = process.env.MONGODB_URL;

//Making configurations related to mongoDB//
mongoose.connect(URL, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
  });
  
//make a connection//

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb Connection success!");
});


const areaRouter = require("./routes/fishAreas.js");

app.use("/area",areaRouter); 

//Run the created port//
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});