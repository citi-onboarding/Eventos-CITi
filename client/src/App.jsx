import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  GetToKnowOurBlog,
  WhyWeDoIt,
  Footer,
  Menu,
  ModalCreator,
  OurEvents,
} from './components';
import React from 'react';
import './style.css';

function App() {
  const [ourEvents, setOurEvents] = useState([]);
  const [agendaEvents, setAgendaEvents] = useState([]);
  const [events, setEvents] = useState();
  const loadEvents = async () => {
    const res = await axios.get('http://localhost:3001/api/events');
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    const ourEventsAux = new Array(0)
    const agendaAux = new Array(0)
    var now = new Date();
    if(events !== undefined) {
    events.forEach((element) => {
      var subscriptionDate = new Date(element.subscriptionDeadline)
      if(subscriptionDate < now) {
        ourEventsAux.push(element)
      } else{
        agendaAux.push(element)
      }
    })
  }
    setOurEvents(ourEventsAux);
    setAgendaEvents(agendaAux);
  }, events)

  
  return (
    <>
    <Menu/>
    <Footer />
    <WhyWeDoIt />
    <ModalCreator agendaEvents={agendaEvents} />
    <OurEvents events={ourEvents}/>
    <GetToKnowOurBlog/>
    </>
  );
}

export default App;