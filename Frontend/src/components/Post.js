
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './../css/components/Post.css';
function Post({ match }) {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>ssss{post.title}</h1>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default Post;
