
import React from 'react';
import './style.css'
import '../BlogSlicker/BlogSlicker'
import '../BlogWrap/BlogWrap'


export default function BlogCard (props) {
  return (
    <article className="blogCard" id="blogCard">
        <img src={props.imagelink} alt="Placeholder" className="BlogCardImage" />
        <div className="content">
          <p className="Date">Eventos / {props.date} </p>
          <h3>{props.name}</h3>
          <p className="Description"> {props.description} </p>
          <a href={props.bloglink}>Leia o texto completo</a>
        </div>
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