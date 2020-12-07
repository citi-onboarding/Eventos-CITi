import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './style.css' 
import BlogCard from '../BlogCard/BlogCard'
export default function Blog () {
  const [blogSection, setBlogSection] = useState();
  const loadBlogSection = async () => {
    const res = await axios.get('http://localhost:3001/api/blogpost'); //Api do Blog
    setBlogSection(res.data);
  };
  useEffect(() => {
    loadBlogSection();
  }, []);

  // HTML Code
  return (
    <section className="blog" id="sectionBlog">
      <div className="container">
        <h2>Conheça nosso Blog</h2>
      </div>
    </section>
  );
}