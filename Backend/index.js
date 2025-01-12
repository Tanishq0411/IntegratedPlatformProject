const port = 5000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const bcrypt = require("bcrypt");
const cors = require("cors");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://collegeproject00000000:iU3qUZJZEWyaSyct@cluster0.4xlkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("MongoDB connected"))
 .catch(err => console.error("MongoDB connection error:", err));

// Mongoose Schema and Model for Users
const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// Middleware for File Upload
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage: storage });
app.use('/images', express.static('upload/images'));

// Twilio Setup


// Routes

// File Upload Route
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// User Signup
app.post("/signup", async (req, res) => {
  const { id, name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ id, name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: "User registration failed", details: error });
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Login failed", details: error });
  }
});

// Twilio SMS Example
app.post("/send-sms", (req, res) => {
  const { to, message } = req.body;
  client.messages
    .create({ body: message, from: "+1234567890", to }) // Replace with a valid Twilio phone number
    .then(message => res.json({ message: "SMS sent successfully", sid: message.sid }))
    .catch(error => res.status(500).json({ error: "SMS sending failed", details: error }));
});

// Start Server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port " + port);
  } else {
    console.log("Error:", error);
  }
});
