import React from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlogWrap from '../BlogWrap/BlogWrap'
import {ReactComponent as BlubbleSix} from './BubbleSix.svg'



import { useState, useEffect } from 'react';
import './style.css' ;


export default function Blog () {
  const [blogSlicker, setBlogSlicker] = useState();
  const loadBlogSlicker = async () => {
    const res = await axios.get('https://citi-eventos.herokuapp.com/api/blogpost'); //Api do Blog
    setBlogSlicker(res.data);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    rows: 1,
    variableWidth:false,
    arrows:false,
  };
 
  useEffect(() => {
    loadBlogSlicker();
  }, []);

  const [loadCards, setLoadCards] = useState();

  const element = []

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
    };
  }, [blogSlicker]);



  // Código HTML
  return (
    <section className="blogSlider" id="GetToKnowOurBlog">
      <BlubbleSix id="BubbleSix"/>
      <div className="container">
        <h3>Conheça nosso blog</h3>
        <Slider {...settings}>
        {loadCards?.map((array) => {
      	return <BlogWrap
        element = {[array]}
        elementx = {array}/>
        })} 
        </Slider>
      </div>
    </section>
  );
}

