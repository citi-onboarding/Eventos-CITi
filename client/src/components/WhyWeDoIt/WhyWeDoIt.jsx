import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './styles.css';

export default function WhyWeDoIt () {
  const [whyWeDoIt, setWhyWeDoIt] = useState();

  const loadWhyWeDoIt = async () => {
    const res = await axios.get('http://localhost:3001/api/why-we-do-it');
    console.log(res.data[0]?.description);
    setWhyWeDoIt(res.data);
  };

  useEffect(() => {
    loadWhyWeDoIt();
  }, []);

  return (
    <section className="why-we-do-it">
      <h2>{whyWeDoIt && whyWeDoIt[0].title}</h2>
      <img src={whyWeDoIt && whyWeDoIt[0].image.secure_url} alt="Por que nós fazemos?"/>
      <p>{whyWeDoIt && whyWeDoIt[0].description}</p>
    </section>
  );
}

// Scala tinha pedido pra usar <p>{whyWeDoIt?[0].description}</p> mas a ? bugava p javascript