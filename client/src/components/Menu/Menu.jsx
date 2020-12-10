import React from 'react';
import './style.css';

import {ReactComponent as FacebookIcon} from './FacebookIcon.svg';
import {ReactComponent as LinkdInIcon} from './LinkdInIcon.svg';
import {ReactComponent as InstagramIcon} from './InstagramIcon.svg';

export default function Menu() {
  return (
    <nav className="menu">
      <div className="container">
        <ul className="socialMenu">
          <li><FacebookIcon/></li>
          <li><LinkdInIcon/></li>
          <li><InstagramIcon/></li>
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

