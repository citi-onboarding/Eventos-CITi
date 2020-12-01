import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './style.css';



export default function WhyWeDoIt () {
  const [why_we_do_it, setWhyWeDoIt] = useState([]);

  const loadWhyWeDoIt = async () => {
    const res = await axios.get('http://localhost:3001/admin/why-we-do-its');
    setWhyWeDoIt(res.data);
  };

  useEffect(() => {
    loadWhyWeDoIt();
  }, []);

  return (
    <section className="why-we-do-it">
      {why_we_do_it?.map(({ _id, title, image, description }) => (
        <div key={_id} className="post-card">
          <h2>{title}</h2>
          <img src={image[0]?.url} alt="Post de Exemplo"/>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}