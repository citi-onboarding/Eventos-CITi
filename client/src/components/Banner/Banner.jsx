import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {ReactComponent as BannerImage} from './imagens/banner.svg';
import './styles.css'
import {ReactComponent as BubbleLeft} from './imagens/bolha-esquerda-verde.svg';
import {ReactComponent as BubbleRight} from './imagens/bolha-direita-azul.svg';

export default function Banner() {
    const [Banner, setBanner] = useState();

    const loadBanner = async () => {
        const res = await axios.get('http://localhost:3001/api/banner');
        console.log(res.data[0]?.description);
        setBanner(res.data);
    }

    useEffect(() => {
        loadBanner();
    }, []);


    return(
        <header className="Banner">
        
            <h1>
                {Banner && Banner[0].title}
            </h1>

            <p>
                {Banner && Banner[0].caption}
            </p>

            <BannerImage className="BackgroundImage" />

            <BubbleLeft className="BubbleLeft"/>

            <BubbleRght className="BubbleRight"/>

        </header>
    )
}
