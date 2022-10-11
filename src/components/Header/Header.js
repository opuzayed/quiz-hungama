import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
   <div className="header">
      <div>
        <h1>Quiz Hungama</h1>
      </div>
      <div className="header-link">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div> 
    
  );
};

export default Header;
