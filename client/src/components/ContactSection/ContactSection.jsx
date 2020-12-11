import './styles.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
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
        <section id="contact-section">
            <form onSubmit={handleSubmit}>
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
                <textarea
                    required
                    placeholder="Mensagem?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input type="submit" value="Confirmar inscrição" />
            </form>

            <div className="social-network-contact">
                <p>@citiufpe</p>
                <p>/company/citiufpe</p>
                <p>/citiufpe/</p>
            </div>
        </section>
    );
}

export default ContactSection;
