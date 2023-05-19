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
   // useCreateIndex: true,
   // useNewUrlParser: true,
    useUnifiedTopology: true,
   // useFindAndModify: false
});

// app.get('/api/images',async(req,res)=>{
//     const {resources}=await cloudinary.search.expression('folder:dev_setup')
//     .sort_by('public_id','desc')
//     .max_results(30)
//     .execute();
//     const publicIds = resources.map( file=>file.public_id);
//     res.send(publicIds);
// })



const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection success!");
});

const ArticleRouter = require("./routes/Articles");
const AdminRouter = require("./routes/Admin.js");
const user=require("./routes/user.js");
const adminroutes=require("./routes/adminroutes")
const {notFound, errorHandler } = require("./Middleware/errorMiddleware.js");



app.use("/",ArticleRouter);
app.use("/",AdminRouter);
app.use("/",user)
app.use("/",adminroutes)
app.use(express.json());
app.use(notFound);
app.use(errorHandler);  

app.use("/uploads",express.static("./uploads"));

app.listen(PORT, () => {
    console.log(`server is up and running on port number : ${PORT}`)
});
