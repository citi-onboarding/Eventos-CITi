import React from 'react';

function OurEventsCard(props) {

    return (
        <>
            <h3>{props.name}</h3>
            <p>{props.eventDate}</p>
            <p>{props.local}</p>
            <p>{props.description}</p>
            <a>{props.knowMoreLink}</a>
        </>
    );
}

export default OurEventsCard;