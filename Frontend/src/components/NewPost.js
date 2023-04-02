
import React, { useState } from 'react';
import axios from 'axios';
import './NewPost.css';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/v1/posts', { title, content });
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <div className="new-post-container">
      <h2 className="new-post-title">Create a New Post</h2>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;


