import React from 'react';
import './style.css'
import '../GetToKnowOurBlog/GetToKnowOurBlog'
import '../BlogWrap/BlogWrap'
import {ReactComponent as Vector} from './Vector.svg'

export default function BlogCard (props) {
  var date = ""
    var eventDate = new Date(props.date)
    var month = ""
    switch (eventDate.getMonth()) {
        case 0:
            month = "janeiro"
            break;
        case 1:
            month = "fevereiro"
            break;
        case 2:
            month = "março"
            break
        case 3:
            month = "abril"
            break
        case 4:
            month = "maio"
            break
        case 5:
            month = "junho"
            break;
        case 6:
            month = "julho"
            break;
        case 7:
            month = "agosto"
            break
        case 8:
            month = "setembro"
            break
        case 9:
            month = "outubro"
            break
        case 10:
            month = "novembro"
            break
        case 11:
            month = "dezembro"
            break
    }
    date = eventDate.getDay() + " de " + month + " de " + eventDate.getFullYear()

  return (
    <article className="blogCard" id="blogCard">
        <img src={props.image} alt="Blog Card Image" className="BlogCardImage" />
        <div className="content">
          <p className="Date">Eventos / {date} </p>
          <h4>{props.name}</h4>
          <p className="description"> {props.description} </p>
          <a href={props.link} className="ReadMoreMobile">Leia  &nbsp; <Vector id="blogVector"/></a>
          <a href={props.link} className="ReadMoreWeb">Leia o texto completo <Vector/></a>
        </div>
    </article>
  );
}