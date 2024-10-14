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

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})
const upload=multer({storage:storage});
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})
//api for teacher message
app.listen(port,(error)=>{
  if(!error){
      console.log("Server is running on port" +port);
  }
  else{
      console.log("Error",+error);
  }
})
