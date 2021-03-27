import React from 'react'

import './EmailSentModal.css';
import closeImg from './assets/close9.png';

export default function EmailSentModal(props) {

    if (!props.display) return null;

    // const addToStyleClasses = (display) => {
    //     let styleClasses = 'email-modal';
    //     if (display) return styleClasses += ' display-modal';
    //     if (display) return styleClasses += ' hide-modal';
    // }

    return (
        <div className="email-modal">
            <p className="modal-text">Email Sent! Check SPAM if you don't see a confirmation email in your mailbox.</p>
            <button className="close-modal" onClick={props.onClose}>
                <img src={closeImg} className="close-image" alt="" />
            </button>
        </div>
    )
}