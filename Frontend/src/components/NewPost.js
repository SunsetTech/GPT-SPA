
import React, { useState } from 'react';
import axios from 'axios';
import './../css/components/NewPost.css';
//import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [createdPost, setCreatedPost] = useState(null);
  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/posts', { title, content });
      setTitle('');
      setContent('');
      setErrorMessage('');
      setCreatedPost(response.data);
      // navigate('/'); // Comment this line to stay on the same page and display the created post
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(JSON.stringify(error.response.data));
      } else {
        setErrorMessage('An error occurred while processing the request.');
      }
    }
  };

  return (
    <div className="new-post-container">
      <h2 className="new-post-title">Create a New Post</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
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
      {createdPost && (
        <div className="created-post">
          <h3>Created Post:</h3>
          <h4>Title: {createdPost.title}</h4>
          <p>Content: {createdPost.content}</p>
        </div>
      )}
    </div>
  );
};

export default NewPost;


