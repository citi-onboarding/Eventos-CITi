import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './style.css'
export default function Blog () {
  const [blog, setBlog] = useState();
  const loadBlog = async () => {
    const res = await axios.get('http://localhost:3001/api/blogpost'); //Api do Blog
    setBlog(res.data);
  };
  useEffect(() => {
    loadBlog();
  }, []);

  // Código HTML
  return (
    <article className="BlogCard" id="blogCard">
      <img src="https://capitalhotelschool.co.za/wp-content/uploads/2017/09/news-placeholder.png" alt="Placeholder" className="BlogCardImage" />
      <div className="content">
        <p className="Date">Eventos / 26 de nevembro de 2020</p>
        <h3>O Tech Center foi muito legal</h3>
        <p className="Description">Nossa foi muito bom mesmo eu estava lá e vi tudo com os meus olhos. Tinha muitas pessoas inteligentes e legais, nossa como eu amei...</p>
        <a href="#">Leia o texto completo</a>
      </div>
    </article>
  );
}