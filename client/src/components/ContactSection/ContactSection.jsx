import './styles.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import bolha from './images/bolha.svg';
import {ReactComponent as LinkedIn} from  './images/linkedin.svg';
import {ReactComponent as Facebook} from  './images/facebook.svg';
import {ReactComponent as Instagram} from './images/insta.svg';
function ContactSection(props) {
    //code with states to be put by fomr 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const subject = "Contato";
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
        <section id="contact" className="contact-place">
            <div className="contact-content">
                <img src={bolha} alt="imagem decorativa" id="BubbleContact"/>
                <form onSubmit={handleSubmit}>
                    <div className="form" />
                    <h2>Fale conosco</h2>
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
                        className="contact-phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <textarea
                        required
                        placeholder="Mensagem"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <input type="submit" value="Enviar" id="confirmSubscription" />
                </form>
                <div className="information">
                    <ul>
                        <li><a href=""><Instagram className="socialIcon"/> @citiufpe</a></li>
                        <li><a href=""><LinkedIn className="socialIcon"/> /company/citiufpe</a></li>
                        <li><a href=""><Facebook className="socialIcon"/> /citiufpe/</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
