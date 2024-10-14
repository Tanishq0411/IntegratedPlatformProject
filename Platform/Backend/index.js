const port=5000;
const express=require("express")
const app=express();
const bodyParser = require('body-parser');
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const multer=require("multer")
const path=require("path")
const twilio = require('twilio');

const cors=require("cors");
const { type } = require("os");
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://shreyanshjanavat:THjOpSxPaffFA47W@cluster0.hjjzae6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on port" +port);
    }
    else{
        console.log("Error",+error);
    }
})