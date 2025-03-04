const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  topic: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0 }
}, { timestamps: true });

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  webLink: { type: String, required: false },
  youtubeLink: { type: String, required: false },
  description: { type: String, required: false }
}, { timestamps: true });

const Post = mongoose.model("Data", PostSchema);
const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = { Data, Subject };