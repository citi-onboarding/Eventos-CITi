import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import arrow from './images/arrow.svg'
import calendar from './images/calendar.svg'
import gps from './images/gps.svg'
export default function agendaCard(props) {
    var date = ""
    var eventDate = new Date(props.eventDate)
    var month = ""
    switch (eventDate.getMonth()) {
        case 0:
            month = "janeiro"
            break;
        case 1:
            month = "fevereiro"
            break;
        case 2:
            month = "março"
            break
        case 3:
            month = "abril"
            break
        case 4:
            month = "maio"
            break
        case 5:
            month = "junho"
            break;
        case 6:
            month = "julho"
            break;
        case 7:
            month = "agosto"
            break
        case 8:
            month = "setembro"
            break
        case 9:
            month = "outubro"
            break
        case 10:
            month = "novembro"
            break
        case 11:
            month = "dezembro"
            break
    }
    date = eventDate.getDay() + " de " + month + " de " + eventDate.getFullYear()

    var dateDeadline = ""
    var eventDeadline = new Date(props.subscriptionDeadline)
    var monthDeadline = ""
    switch (eventDeadline.getMonth()) {
        case 0:
            monthDeadline = "janeiro"
            break;
        case 1:
            monthDeadline = "fevereiro"
            break;
        case 2:
            month = "março"
            break
        case 3:
            monthDeadline = "abril"
            break
        case 4:
            monthDeadline = "maio"
            break
        case 5:
            monthDeadline = "junho"
            break;
        case 6:
            monthDeadline = "julho"
            break;
        case 7:
            monthDeadline = "agosto"
            break
        case 8:
            monthDeadline = "setembro"
            break
        case 9:
            monthDeadline = "outubro"
            break
        case 10:
            monthDeadline = "novembro"
            break
        case 11:
            monthDeadline = "dezembro"
            break
    }
    dateDeadline =  "Inscrições até " + eventDeadline.getDay() + " de " + monthDeadline + " de " + eventDeadline.getFullYear()

    return (
        <article className="agendaCard">
            <img className="agendaImage" src={props.secureUrl}></img>
            <p className="subscriptionDeadline">{dateDeadline}</p>
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
        </article>
    );
}