import React from 'react';
import './style.css';

import {ReactComponent as CITiEventosLogo} from './CITiEventosLogo.svg';
import {ReactComponent as FacebookIcon} from './FacebookIcon.svg';
import {ReactComponent as LinkdInIcon} from './LinkdInIcon.svg';
import {ReactComponent as InstagramIcon} from './InstagramIcon.svg';


export default function Menu() {
  let menuButton = "yyyyyyyyy";

  function handleClick() {
    const renderMenu = document.querySelector(".menu")
    if (renderMenu){
      renderMenu.classList.toggle("change");
    }
  }

  return (
    <nav className="menu">
      <div className="container">
        <CITiEventosLogo id="CITiLogo"/>
        <div className="buttonsWrap">
          <a className="menuButton"  onClick={handleClick}>AAAAAAAAAAAAAA</a>
          <ul className="socialMenu">
          <li><a href="https://www.facebook.com/citiufpe/"><FacebookIcon/></a></li>
          <li><a href="https://www.linkedin.com/school/cinufpe/"><LinkdInIcon/></a></li>
          <li><a href="https://www.instagram.com/citiufpe/?hl=pt-br"><InstagramIcon/></a></li>
        </ul>
        </div>
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



// function handleClick() {
//   button.classList.toggle("change")
// }

// onClick={handleClick}