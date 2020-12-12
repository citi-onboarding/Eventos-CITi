import './styles.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import calendar from './images/calendar.svg'
import gps from './images/gps.svg'
function SubscriptionModal(props) {
    const node = useRef();
    const monthString = ((date) => {
        switch (date.getMonth()) {
            case 0:
                return "janeiro"
            case 1:
                return "fevereiro"
            case 2:
                return "março"
            case 3:
                return "abril"
            case 4:
                return "maio"
            case 5:
                return "junho"
            case 6:
                return "julho"
            case 7:
                return "agosto"
            case 8:
                return "setembro"
            case 9:
                monthDate = "outubro"
                break
            case 10:
                return "novembro"
            case 11:
                return "dezembro"
        }
        return;
    });
    const weekDay = ((date) => {
        switch (date.getDay()) {
            case 0:
                return "seg"
            case 1:
                return "ter"
            case 2:
                return "quar"
            case 3:
                return "qui"
            case 4:
                return "sex"
            case 5:
                return "sab"
            case 6:
                return "dom"
        }
        return;
    });
    var subscriptionDeadlineString = ""
    var subDate = new Date(props.subscriptionDeadline)
    var month = monthString(subDate)
    subscriptionDeadlineString = "Inscrições até "+ subDate.getDay() + " de " + month + " de " + subDate.getFullYear();
    
    var dateString = ""
    var date = new Date(props.eventDate)
    var monthDate = monthString(date)
    dateString = weekDay(date) + ", " + date.getDate() + " de " + monthString(date) + " de " + date.getFullYear();
    
    

    subscriptionDeadlineString = "Inscrições até "+ subDate.getDay() + " de " + month + " de " + subDate.getFullYear();
    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        console.log("clicou")
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const handleClick = e => {
        e.stopPropagation();
        if (node.current.contains(e.target)) {
            console.log("clicou dentro")
            return;
        }
        console.log("clicou fora")
        // outside click 
        props.setModal("")
        props.setRender(false)
    };

    //code to show or hide modal
    const [dropdown, setDropdown] = useState("hidden");

    const showDropdown = () => {
        setDropdown("show");
    };

    const hideDropdown = () => {
        setDropdown("hidden");
    };

    //code with states to be put by fomr 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [placeOfWorkOrStudy, setPlaceOfWorkOrStudy] = useState('');
    const [workRoleOrStudyArea, setWorkRoleOrStudyArea] = useState('');
    const [howYouMetUs, setHowYouMetUs] = useState('')
    const [subject, setSubject] = useState('')
    //creates string to be the  subject on email
    useEffect(() => {
        setSubject("Inscrição de " + name + " no projeto " + props.name);
    }, [name, setName]);
    //sends email using a http post
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            await axios.post('http://localhost:3001/api/subscription', {
                name,
                email,
                phone,
                subject,
                placeOfWorkOrStudy,
                workRoleOrStudyArea,
                howYouMetUs,
            });
        } catch (err) {
            console.log(err?.response || err);
        }
    };

    return (
        <div>
            <button onClick={showDropdown}>{props.name}</button>
            <div className="modal">
                <div className="show" >
                    <div className="modal-content" ref={node}>
                        <div className="modal-header">
                            <img alt="imagem do evento" src={props.secureUrl} className="event-image"/>
                            <div className="event-info">
                                <p className="subscription-date">{subscriptionDeadlineString}</p>
                                <h3 className="event-title">{props.name}</h3>
                                <div className="date-and-local">
                                    <div className="date">
                                        <img src={calendar} alt="calendario" className="mini-photos"/>
                                        <p>{dateString}</p>
                                    </div>
                                    <div className="date">
                                        <img src={gps} alt="" className="mini-photos"/>
                                        <p>{props.local}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="event-description">{props.subscriptionDescription}</p>
                        <form onSubmit={handleSubmit} className="modal-form">
                            <h2>Inscreva-se:</h2>
                            <p>*Você receberá as informações através do seu e-mail.</p>
                            <div className="form" />
                            <input
                                required
                                type="text"
                                placeholder="Nome"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                required
                                type="email"
                                placeholder="E-mail"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Telefone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Onde você trabalha/estuda?"
                                name="placeOfWorkOrStudy"
                                value={placeOfWorkOrStudy}
                                onChange={(e) => setPlaceOfWorkOrStudy(e.target.value)}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Qual o seu cargo ou área de estudo?"
                                name="workRoleOrStudyArea"
                                value={workRoleOrStudyArea}
                                onChange={(e) => setWorkRoleOrStudyArea(e.target.value)}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Como nos conheceu?"
                                name="howYouMetUs"
                                value={howYouMetUs}
                                onChange={(e) => setHowYouMetUs(e.target.value)}
                            />
                            <input className="submit-button" type="submit" value="Confirmar inscrição" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionModal;
