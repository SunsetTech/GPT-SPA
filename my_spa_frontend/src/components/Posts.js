
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);


	useEffect(() => {
	  const fetchPosts = async () => {
		const response = await axios.get('http://localhost:3000/api/v1/posts');
		const sortedPosts = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
		setPosts(sortedPosts);
	  };

	  fetchPosts();
	}, []);



	return (
	  <div>
		<h1>Posts</h1>
		<ul>
		  {posts.map(post => (
			<li key={post.id}>
			  <h2>{post.title}</h2>
			  <p>{post.content}</p>
			</li>
		  ))}
		</ul>
	  </div>
	);

};

export default Posts;
