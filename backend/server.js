import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";  //this will convert json format to java script object
import cors from "cors";
const app = express();
import { config } from "dotenv";
import dbConnect from "./dbConnect.js";

//app middleware
app.use(bodyParser.json());
app.use(cors());

//allows us access environment variables like dotenv files
config();

dbConnect();

//allows us get json object in request body
app.use(express.json());

//import routesc
//const postRoutes = require('./routes/posts');
// http://localhost:6000/volunteer
import volunteerRoutes from "./routes/volunteerRoute.js";
import donationRoutes from "./routes/donationRoute.js";

//route middleware
// app.use(postRoutes);
app.use("/volunteer",volunteerRoutes);
app.use("/donation",donationRoutes);

const port = process.env.PORT || 8020;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
