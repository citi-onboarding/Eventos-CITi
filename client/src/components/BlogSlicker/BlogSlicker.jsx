import React from 'react';
import axios from 'axios';
import Slider from "react-slick";
import BlogCard from '../BlogCard/BlogCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlogWrap from '../BlogWrap/BlogWrap'



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
    rows: 1,

  };
 
  useEffect(() => {
    loadBlogSlicker();
  }, []);

  const [loadCards, setLoadCards] = useState();

  const loadingCards = [];
  useEffect(() => {
    if (blogSlicker){
      for (let i = 0; i < Math.ceil(blogSlicker.length/2); i+=1){
        if (blogSlicker[i*2+1]) {
          loadingCards.push([blogSlicker[i*2],blogSlicker[i*2+1]]);
        } else {
          loadingCards.push(blogSlicker[i*2]);

        }
      }
    setLoadCards(loadingCards)
    console.log(loadCards)
    };
  }, [blogSlicker]);



  // Código HTML
  return (
    
    <div className="blogSlicker" id="blogSlicker">
      <div className="container">
        <h3>SLIDER!!</h3>
        <Slider {...settings}>
        {loadCards?.map(({ name, image, link,description, date }) => (
            <BlogWrap
            name = {name}
            description= {description}
            bloglink = {link}
            date = {date}
            />
          ))}
        </Slider>
    
        
      </div>
    </div>
  );
}