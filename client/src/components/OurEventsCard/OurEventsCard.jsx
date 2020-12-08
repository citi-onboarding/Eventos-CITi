import React from 'react';
import './styles.css';
function OurEventsCard(props) {
    
    return (
        <div className="ourEventsCard">
            <img src={props.secureUrl}></img>
            <h3>{props.name}</h3>
            <p>{props.eventDate}</p>
            <p>{props.local}</p>
            <p>{props.description}</p>
            <a href={props.knowMoreLink}>Inscreva-se</a>
        </div>
    );
}

export default OurEventsCard;