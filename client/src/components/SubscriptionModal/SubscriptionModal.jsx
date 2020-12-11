import './styles.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
function SubscriptionModal(props) {
    const node = useRef();

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
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
        // outside click 
        hideDropdown();
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
        setSubject("Inscrição de " + name + " no projeto");
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
            <button onClick={showDropdown}>clica aqui vai</button>
            <div className="modal">
                <div className={dropdown} >
                    <div className="modal-content" ref={node}>
                        <div>
                            <div className="modal-header" />
                            <img alt="imagem do evento" />
                            <div className="event-info">
                                <p className="subscription-date">Inscrições até 25 de novembro de  2020</p>
                                <h3 className="event-title"></h3>
                                <p className="date-and-local"></p>
                            </div>
                        </div>
                        <p className="event-description"></p>
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
