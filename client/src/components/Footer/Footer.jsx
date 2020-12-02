import React from 'react';

import './styles.css';

import facebookLogo from './images/facebook.svg';
import instagramLogo from './images/intagram.svg';
import linkedinLogo from './images/linkedin.svg';
import phoneImage from './images/phone.svg';
import logoCitiEventos from './images/logo-citi-eventos-vertical.svg';
import codeImage from './images/code.svg';
import heart from './images/heart.svg';
import logoCiti from './images/logo-citi-principal.svg';

function Footer() {

  return (
    <footer className="footer">
        <div className="contatoFooter">
          <div className="socialNetworksFooter">
          <a href="https://www.facebook.com/"><img src={facebookLogo} alt="logo do facebook " /></a>
          <a href="https://www.linkedin.com"><img src={linkedinLogo} alt="logo do linkedin"/></a>
          <a href="https://www.instagram.com"><img src={instagramLogo} alt="logo do instagram"/></a>
          </div>
          <div className="phone">
            <img src={phoneImage} alt="imgem de um telefone"/>
            <p>+55 (81) 2126-8430 (ramal 4764)</p>
          </div>
        </div>
        <div className="logoCitiFooter">
          <img src={logoCitiEventos} alt="logo do Citi eventos"/>
        </div>
        <div className="endereco">
          <p>Av. Jornalista Anibal Fernandes, s/n - Cidade Universitária. Recife - PE. 50740-560</p>
          <div className="message">
          <p>Made with  &nbsp;<img src={codeImage} alt="representacao de um codigo"/>  &nbsp;and&nbsp;  <img src={heart} alt="coracao"/>  &nbsp;by&nbsp;  <img id="logoDoCiti" src={logoCiti} alt="logo do citi"/></p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
