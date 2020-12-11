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
                        <SubscriptionModal />
                    </div>
                );
            })}
        </>
    );
}

export default modalCreator;