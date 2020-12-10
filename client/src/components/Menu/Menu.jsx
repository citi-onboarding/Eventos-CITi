import React from 'react';
import './styles.css';

export default function Menu() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="sectionsMenu">
          <li><a href="">Início</a></li>
          <li><a href="#sectionWhyWeDoIt">Por que fazemos?</a></li>
          <li><a href="">Agenda</a></li>
          <li><a href="">Outros Eventos</a></li>
          <li><a href="#GetToKnowOurBlog">Conheça nosso blog</a></li>
          <li><a href="#Contact"></a>Contato</li>
        </ul>
      </div>
    </nav> 
  );
}

