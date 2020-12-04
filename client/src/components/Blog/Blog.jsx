import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles.css'; //Importa Estilo
export default function Blog () {
  const [blog, setBlog] = useState();
  const loadBlog = async () => {
    const res = await axios.get('http://localhost:3001/api/blog'); //Api do Blog
    setBlog(res.data);
  };
  useEffect(() => {
    loadBlog();
  }, []);

  // Código HTML
  return (
    <section className="blog" id="sectionBlog">
      <div className="container">
        <h2>Conheça nosso Blog</h2>
      </div>
    </section>
  );
}