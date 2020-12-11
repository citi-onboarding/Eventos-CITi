import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import arrow from './images/arrow.svg'
import calendar from './images/calendar.svg'
import gps from './images/gps.svg'
function OurEventsCard(props) {
    var date = ""
    var eventDate = new Date(props.eventDate)
    var month = ""
    switch (eventDate.getMonth()) {
        case 1:
            month = "janeiro"
            break;
        case 2:
            month = "fevereiro"
            break;
        case 3:
            month = "março"
            break
        case 4:
            month = "abril"
            break
        case 5:
            month = "maio"
            break
        case 6:
            month = "junho"
            break;
        case 7:
            month = "julho"
            break;
        case 8:
            month = "agosto"
            break
        case 9:
            month = "setembro"
            break
        case 10:
            month = "outubro"
            break
        case 11:
            month = "novembro"
            break
        case 12:
            month = "dezembro"
            break
    }
    date = "Última edição em " + eventDate.getDay() + " de " + month + " de " + eventDate.getFullYear()

    return (
        <div className="ourEventsCard">
            <img src={props.secureUrl}></img>
            <h3>{props.name}</h3>
            <div className="dateAndLocal">
                
                <p><img src={calendar} alt="icone de calendario" />{date}</p>
            </div>
            <div className="dateAndLocal">
                
                <p><img src={gps} alt="icone de gps" />{props.local}</p>
            </div>
            <p className="description">{props.description}</p>
            <div className="knowMore">
                <a href={props.knowMoreLink} target="_blank" >Saiba mais</a>
                <img src={arrow} alt="flecha apontando para o link" />
            </div>
        </div>
    );
}

export default OurEventsCard;