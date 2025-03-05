const mongoose = require("mongoose");

// ✅ Define Subject Schema
const SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    webLink: { type: String },
    youtubeLinkHindi: { type: String },
    youtubeLinkEnglish: { type: String },
    description: { type: String }
});

const Subject = mongoose.model("Subject", SubjectSchema);

// ✅ Define Post Schema
const PostSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    topic: { type: String, required: true },
    description: { type: String },
    link: { type: String },
    rating: { type: Number, min: 0, max: 5 } // Rating should be between 0-5
});

const Post = mongoose.model("Post", PostSchema);

module.exports = { Subject, Post };