import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles.css'
import {ReactComponent as BannerImage} from './images/banner.svg';
import {ReactComponent as BubbleLeft} from './images/left-bubble.svg';
import {ReactComponent as BubbleRight} from './images/right-bubble.svg';

export default function Banner() {
    const [banner, setBanner] = useState();

    const loadBanner = async () => {
        const res = await axios.get('http://localhost:3001/api/banner');
        console.log(res.data[0]?.description);
        setBanner(res.data);
    }

    useEffect(() => {
        loadBanner();
    }, []);

console.log(banner);

    return(
        <header className="Banner">

            <BubbleRight className="BubbleRight"/>

            <BubbleLeft className="BubbleLeft"/>

            <div className="container">
                <div className="content">
                    <h1>
                        {banner && banner[0].title}
                    </h1>

                    <p>
                        {banner && banner[0].caption}
                    </p>
                </div>

                <BannerImage className="BackgroundImage" />

            </div>    


        </header>
    )
}
