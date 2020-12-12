import React from 'react';
import SubscriptionModal from './SubscriptionModal.jsx'
import { useState } from "react"

import './modalCreatorStyle.css';


function modalCreator(props) {

    return (
        <>
            {props.agendaEvents.map((item) => {
                return (
                    <div>
                        <SubscriptionModal 
                            secureUrl = {item.images[0].secure_url}
                            name={item.name}
                            eventDate={item.eventDate}
                            subscriptionDeadline={item.subscriptionDeadline}
                            local={item.local}
                            subscriptionDescription={item.subscriptionDescription}
                            knowMoreLink={item.knowMoreLink}
                        />
                    </div>
                );
            })}
        </>
    );
}

export default modalCreator;