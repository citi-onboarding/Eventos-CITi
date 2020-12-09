import React from 'react';
import './style.css'
import '../BlogSlicker/BlogSlicker'
import '../BlogWrap/BlogWrap'
import {ReactComponent as Vector} from './Vector.svg'


export default function BlogCard (props) {
  return (
    <article className="blogCard" id="blogCard">
        <img src={props.image} alt="Blog Card Image" className="BlogCardImage" />
        <div className="content">
          <p className="Date">Eventos / {props.date} </p>
          <h3>{props.name}</h3>
          <p className="Description"> {props.description} </p>
          <a href={props.link}>Leia o texto completo <Vector/> </a>
        </div>
    </article>
  );
}