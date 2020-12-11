import React from 'react';
import './style.css';

import {ReactComponent as BubbleBurguer} from './BubbleBurguer.svg';
import {ReactComponent as BurguerOpen} from './BurguerOpen.svg';
import {ReactComponent as BurguerFrame} from './BurguerClosed.svg';
import {ReactComponent as CITiEventosLogo} from './CITiEventosLogo.svg';
import {ReactComponent as FacebookIcon} from './FacebookIcon.svg';
import {ReactComponent as LinkdInIcon} from './LinkdInIcon.svg';
import {ReactComponent as InstagramIcon} from './InstagramIcon.svg';


export default function Menu() {
  function handleClick() {
    const renderMenu = document.querySelector(".menu")
    if (renderMenu){
      renderMenu.classList.toggle("change");
    }
  }

  return (
    <div>
      <div className="alignment"></div>
    <nav className="menu">
      <div className="container">
        <CITiEventosLogo id="CitiLogo"/>
        <div className="buttonsWrap">
          <ul className="socialMenu">
          <li><a href="https://www.facebook.com/citiufpe/"><FacebookIcon id="FacebookIcon"/></a></li>
          <li><a href="https://www.linkedin.com/school/cinufpe/"><LinkdInIcon id="LinkdInIcon"/></a></li>
          <li><a href="https://www.instagram.com/citiufpe/?hl=pt-br"><InstagramIcon id="InstagramIcon"/></a></li>
        </ul>
          <div className="menuButton" onClick={handleClick}>
            <BurguerFrame id="burguerClosed"/>
            </div>
          </div>  
          <div className="burguerButton" >
          <BurguerOpen id="burguerOpen" onClick={handleClick}/> 
        </div>
        <ul className="sectionsMenu">
          <li><a href="#Banner" onClick={handleClick}>Início</a></li>
          <li><a href="#sectionWhyWeDoIt" onClick={handleClick}>Por que fazemos?</a></li>
          <li><a href="" onClick={handleClick}>Eventos</a></li>
          <li><a href="#GetToKnowOurBlog" onClick={handleClick}>Conheça nosso blog</a></li>
          <li><a href="#Contact" onClick={handleClick}>Contato</a></li>
        </ul>
      </div>
        <BubbleBurguer id="BurguerBubble"/>
    </nav>
    </div> 
  );
}