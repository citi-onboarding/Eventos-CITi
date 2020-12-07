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
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    rows: 2,

  };
  useEffect(() => {
    loadBlogSlicker();
  }, []);

  // Código HTML
  return (
    
    <div className="blogSlicker" id="blogSlicker">
      <div className="container">
      <h2> Single Item</h2>
        <Slider {...settings}>
        <div>
            <BlogCard/>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        </Slider>
        
      </div>
    </div>
  );
}