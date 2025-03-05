import React, { useState } from "react";
import "./CreatePost.css"; // Import the external CSS

const CreatePost = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [webLink, setWebLink] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      topic: selectedTopic,
      videoUrl,
      webLink,
      description,
    };
    console.log("Post Data:", postData);
    alert("Post submitted successfully!");
  };

  return (
    <div className="create-post-container">
      <h2 className="title">Create a Post</h2>

      {/* Topic Selection */}
      <label className="label">Topic:</label>
      <select
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
        className="input-field"
      >
        <option value="">Select a topic</option>
        <option value="technology">Technology</option>
        <option value="health">Health</option>
        <option value="food">Food</option>
        <option value="travel">Travel</option>
      </select>

      {/* Video URL Input */}
      <label className="label">YouTube Video URL:</label>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="input-field"
        placeholder="Enter YouTube link"
      />

      {/* Web Link Input */}
      <label className="label">Web Link:</label>
      <input
        type="text"
        value={webLink}
        onChange={(e) => setWebLink(e.target.value)}
        className="input-field"
        placeholder="Enter web link"
      />

      {/* Description Box */}
      <label className="label">Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="textarea-field"
        placeholder="Write your description..."
      />

      {/* Submit Button */}
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
