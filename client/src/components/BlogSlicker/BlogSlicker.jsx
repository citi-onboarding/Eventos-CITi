import React from 'react';
import axios from 'axios';
import Slider from "react-slick";
import BlogCard from '../BlogCard/BlogCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import { useState, useEffect } from 'react';
import './style.css' ;


export default function Blog () {
  const [blogSlicker, setBlogSlicker] = useState();
  const loadBlogSlicker = async () => {
    const res = await axios.get('http://localhost:3001/api/blogpost'); //Api do Blog
    setBlogSlicker(res.data);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    rows: 2,

  };
  useEffect(() => {
    loadBlogSlicker();
  }, []);

  // Código HTML
  return (
    
    <div className="blogSlicker" id="blogSlicker">
      <div className="container">
        <Slider {...settings}>
        {blogSlicker?.map(({ name, image, link,description, date }) => (
            <BlogCard
            name = {name}
            description= {description}
            bloglink = {link}
            imagelink = {image.secure_url}
            date = {date}
            />
          ))}
        </Slider>
        
      </div>
    </div>
  );
}