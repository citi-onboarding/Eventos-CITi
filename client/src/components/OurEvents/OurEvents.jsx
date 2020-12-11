import React from 'react';
import Slider from "react-slick";
import OurEventsCard from "../OurEventsCard/OurEventsCard.jsx"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as BubbleFive} from './BubbleFive.svg'

import './styles.css';

function OurEvents(props) {
    
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
    <section className="our-events" id="our-events">
      <div className="content">
        <BubbleFive id="BubbleFive"/>
        <h2> Outros eventos</h2>
        <Slider {...settings}>
          {props.oldEvents.map((item) => {
            return(
              <OurEventsCard 
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

export default OurEvents;