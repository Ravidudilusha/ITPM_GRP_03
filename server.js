const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const cors = require('cors');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});




const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection success!");
});

const StaffRouter = require("./routes/Staffs.js");
const AdminRouter = require("./routes/Admin.js");
const user=require("./routes/user.js");
const adminroutes=require("./routes/adminroutes")
const {notFound, errorHandler } = require("./Middleware/errorMiddleware.js");



app.use("/",StaffRouter);
app.use("/",AdminRouter);
app.use("/",user)
app.use("/",adminroutes)
app.use(express.json());

app.use(notFound);
app.use(errorHandler);  

app.listen(PORT, () => {
    console.log(`server is up and running on port number : ${PORT}`)
});
