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
    console.log(eventDate.getMonth())
    switch (eventDate.getMonth()) {
        case 1:
            month = "Janeiro"
            break;
        case 2:
            month = "Fevereiro"
            break;
        case 3:
            month = "Março"
            break
        case 4:
            month = "Abril"
            break
        case 5:
            month = "Maio"
            break
        case 6:
            month = "Junho"
            break;
        case 7:
            month = "Julho"
            break;
        case 8:
            month = "Agosto"
            break
        case 9:
            month = "Setembro"
            break
        case 10:
            month = "Outubro"
            break
        case 11:
            console.log("entrou")
            month = "Novembro"
            break
        case 12:
            month = "Dezembro"
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