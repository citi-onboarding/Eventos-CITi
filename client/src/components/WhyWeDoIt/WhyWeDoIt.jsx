import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './styles.css';

export default function WhyWeDoIt () {
  const [whyWeDoIt, setWhyWeDoIt] = useState(['teste']);

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
      <h2>{whyWeDoIt[0].title}</h2>
      <img src="https://s2.glbimg.com/zPloOmW9yoEcYyMiYcdIHhpet5s=/780x440/e.glbimg.com/og/ed/f/original/2015/03/18/tilapia_1.jpg" alt="Placeholder"/>
      <p>{whyWeDoIt[0].description}</p>
    </section>
  );
}

// Scala tinha pedido pra usar <p>{whyWeDoIt[0].description}</p> mas a ? bugava p javascript