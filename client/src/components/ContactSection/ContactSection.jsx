import './styles.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import calendar from './images/calendar.svg'
import gps from './images/gps.svg'
function ContactSection(props) {



    //code with states to be put by fomr 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    //sends email using a http post
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            await axios.post('http://localhost:3001/api/subscription', {
                name,
                email,
                phone,
                subject,
                message,
            });
        } catch (err) {
            console.log(err?.response || err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="modal-form">
                <h2>Fale conosco</h2>
                <div className="form" />
                <p>Nome</p>
                <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>E-mail</p>
                <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    required
                    type="text"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    required
                    type="text"
                    placeholder="Mensagem?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input className="submit-button" type="submit" value="Confirmar inscrição" />
            </form>

        </div>
    );
}

export default ContactSection;
