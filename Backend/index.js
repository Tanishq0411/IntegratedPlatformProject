
const port = 5001;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { Subject, Post } = require("./models"); // ✅ Import Models


app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//  Connect to MongoDB
mongoose.connect("mongodb+srv://shreyanshsharma2030:AxiFzD6OHJdkmaMV@cluster0.oibkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Wait 10s before failing
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB Connection Error:", err));


//  Configure Image Uploads
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });
app.use('/images', express.static('upload/images'));

//  Upload Route
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//  API for Posting and Fetching Subjects
app.post("/addsubjects", async (req, res) => {
    try {
        const { name, webLink, youtubeLinkHindi,youtubeLinkEnglish, description } = req.body;
        const newSubject = new Subject({ name, webLink, youtubeLinkHindi,youtubeLinkEnglish, description });
        await newSubject.save();
        res.status(201).json({ success: true, data: newSubject });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get("/getsubjects", async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({ success: true, data: subjects });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
app.get("/getSubjectbyname", async (req, res) => {
    try {
        const subjectName = req.query.name; // ✅ Extract name from query parameters

        if (!subjectName) {
            return res.status(400).json({ success: false, message: "Subject name is required" });
        }

        // ✅ Case-insensitive search
        const subject = await Subject.findOne({ name: new RegExp(`^${subjectName}$`, "i") });

        if (!subject) {
            return res.status(404).json({ success: false, message: "Subject not found" });
        }

        res.status(200).json({ success: true, data: subject });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
//post creation apis
app.post("/createPost", async (req, res) => {
    try {
        const {  username, email, topic, description,link,rating } = req.body;
        const newPostData = new Post({ username, email, topic, description,link,rating});
        await newPostData.save();
        res.status(201).json({ success: true, data: newPostData });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});


//  Start Server
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on port ${port}`);
    } else {
        console.log("Error:", error);
    }
});
