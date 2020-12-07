import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './style.css'
export default function BlogCard () {
const [blogCard, setBlogCard] = useState([]);

  const loadBlogCard = async () => {
    const res = await axios.get('http://localhost:3001/api/blogpost');
    setBlogCard(res.data);
  };

  useEffect(() => {
    loadBlogCard();
  }, []);

  return (
    <article>
      {blogCard?.map(({ name, image, link,description, date }) => (
        <div className="blogCard" id="blogCard">
          <img src={image.secure_url} alt="Placeholder" className="BlogCardImage" />
          <div className="content">
            <p className="Date">Eventos / {date} </p>
            <h3>{name}</h3>
            <p className="Description"> {description} </p>
            <a href={link}>Leia o texto completo</a>
          </div>
        </div>
      ))}
    </article>
  );
}


{/* <article className="BlogCard" id="blogCard">
      <img src="https://capitalhotelschool.co.za/wp-content/uploads/2017/09/news-placeholder.png" alt="Placeholder" className="BlogCardImage" />
      <div className="content">
        <p className="Date">Eventos / 26 de nevembro de 2020</p>
        <h3>O Tech Center foi muito legal</h3>
        <p className="Description">Nossa foi muito bom mesmo eu estava lá e vi tudo com os meus olhos. Tinha muitas pessoas inteligentes e legais, nossa como eu amei...</p>
        <a href="#">Leia o texto completo</a>
      </div>
    </article> */}