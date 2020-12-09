import React from 'react';
import './style.css' 
import BlogCard from '../BlogCard/BlogCard';
import '../BlogSlicker/BlogSlicker'

export default function BlogWrap (props) {
  console.log(props.element) 
  function RenderCards (){
    if (props.element && props.element[0].name) {
      return(
        <BlogCard
        name = {props.element && props.element[0].name}
        description = {props.element && props.element[0].description}
        date = {props.element && props.element[0].date}
        image = {props.element && props.element[0].image.secure_url}
        link = {props.element && props.element[0].link}
        />
      )

    } else {
      return (
        <div className="cardContainer">
          <div className="topCard">
            <BlogCard
              name = {props.elementx && props.elementx[0].name}
              description = {props.elementx && props.elementx[0].description}
              date = {props.elementx && props.elementx[0].date}
              image = {props.elementx && props.elementx[0].image.secure_url}
              link = {props.elementx && props.elementx[0].link}/>
          </div>
          <div className="bottomCard">
            <BlogCard
              name = {props.elementx && props.elementx[1].name}
              description = {props.elementx && props.elementx[1].description}
              date = {props.element && props.elementx[1].date}
              image = {props.elementx && props.elementx[1].image.secure_url}
              link = {props.elementx && props.elementx[1].link}/>
          </div>
        </div>
        )
    }
  }


  
  return (
    <div className="blogWrap">
      
      {RenderCards()}
      
  
      
    </div>
  );
}

