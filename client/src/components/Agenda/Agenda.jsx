import React from 'react';
import Slider from "react-slick";
import AgendaCard from "../AgendaCard/AgendaCard.jsx"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export default function Agenda(props) {
    
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        variableWidth: true
      };

  return (
    <section className="agenda" id="agenda">
      <div className="content">
        <h2>Agenda</h2>
        <Slider {...settings}>
          {props.newEvents.map((item) => {
            return(
              <AgendaCard 
                subscriptionDeadline={item.subscriptionDeadline}
                secureUrl = {item.images[0].secure_url}
                name={item.name}
                eventDate={item.eventDate}
                local={item.local}
                description={item.description}
                knowMoreLink={item.knowMoreLink}
              />
            );
          })}
        </Slider>
      </div>
      </section>
  );
}
