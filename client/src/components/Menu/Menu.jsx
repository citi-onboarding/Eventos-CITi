import React from 'react';

import './style.css'

export default function Menu() {
  return (
    <nav>
      <div className="container">
        <ul className="socialMenu">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="sectionsMenu">
          <li><a href="#Banner">Início</a></li>
          <li><a href="#sectionWhyWeDoIt">Por que fazemos?</a></li>
          <li><a href="">Agenda</a></li>
          <li><a href="">Outros Eventos</a></li>
          <li><a href="#GetToKnowOurBlog">Conheça nosso blog</a></li>
          <li><a href="#Contact">Contato</a></li>
        </ul>
      </div>
    </nav> 
  );
}

