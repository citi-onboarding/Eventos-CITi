import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Banner,
  GetToKnowOurBlog,
  WhyWeDoIt,
  Footer,
  Menu,
  SubscriptionModal,
  ContactSection,
  OurEvents,
  Agenda,
} from './components';
import React from 'react';
import './style.css';



function App() {
  const [ourEvents, setOurEvents] = useState([]);
  const [agendaEvents, setAgendaEvents] = useState([]);
  const [events, setEvents] = useState();
  const [modal, setModal] = useState("");
  const [modalEvent, setModalEvent] = useState("");
  const [renderModal, setRenderModal] = useState(false);
  const loadEvents = async () => {
    const res = await axios.get('http://localhost:3001/api/events');
    setEvents(res.data);
  };

  useEffect(() => {
    agendaEvents.map((item) => {
      if (item._id == modal) {
        setModalEvent(item)
        setRenderModal(true)
        return
      }
    })
  }, [modal]);

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    const ourEventsAux = new Array(0)
    const agendaAux = new Array(0)
    var now = new Date();
    if (events !== undefined) {
      events.forEach((element) => {
        var subscriptionDate = new Date(element.subscriptionDeadline)
        if (subscriptionDate < now) {
          ourEventsAux.push(element)
        } else {
          agendaAux.push(element)
        }
      })
    }
    setOurEvents(ourEventsAux);
    setAgendaEvents(agendaAux);
  }, events)


  return (
    <>
      <Menu />
      <Banner />
      <Footer />
      <WhyWeDoIt />
      <Agenda
        newEvents={agendaEvents} modal={setModal} />
      <OurEvents
        oldEvents={ourEvents} />
      <GetToKnowOurBlog />
      {renderModal && (
        <SubscriptionModal
          secureUrl={modalEvent.images[0].secure_url}
          name={modalEvent.name}
          eventDate={modalEvent.eventDate}
          subscriptionDeadline={modalEvent.subscriptionDeadline}
          local={modalEvent.local}
          subscriptionDescription={modalEvent.subscriptionDescription}
          knowMoreLink={modalEvent.knowMoreLink}
          setRender={setRenderModal}
          setModal={setModal}
        />
      )}
      <ContactSection />
    </>
  );
}

export default App;