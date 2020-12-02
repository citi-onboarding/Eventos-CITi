import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {ReactComponent as BubbleSix} from './image/bolha6.svg'
import './styles.css';

export default function WhyWeDoIt () {
  const [whyWeDoIt, setWhyWeDoIt] = useState();
  const loadWhyWeDoIt = async () => {
    const res = await axios.get('http://localhost:3001/api/why-we-do-it');
    setWhyWeDoIt(res.data);
  };

  useEffect(() => {
    loadWhyWeDoIt();
  }, []);

  return (
    <section className="why-we-do-it" id="sectionWhyWeDoIt">
      <div className="container">
        <div className="content">
        <h2>{whyWeDoIt && whyWeDoIt[0].title}</h2>
        <img src={whyWeDoIt && whyWeDoIt[0].image.secure_url} alt="Por que nós fazemos?" id="mobileImageWhyWeDoIt"/>
        <p>{whyWeDoIt && whyWeDoIt[0].description}</p>
        </div>
        <img src={whyWeDoIt && whyWeDoIt[0].image.secure_url} alt="Por que nós fazemos?" id="webImageWhyWeDoIt"/>
      </div>
      <BubbleSix className="BubbleSix"></BubbleSix>
    </section>
  );
}