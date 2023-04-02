
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Post from './components/Post';
import './css/App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-post">New Post</Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

