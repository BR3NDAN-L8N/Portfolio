import React from 'react'

import './EmailSentModal.css';
//  FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function EmailSentModal(props) {

    if (!props.display) return null;

    const closeImg = <FontAwesomeIcon icon={faTimes} />

    return (
        <div className="email-modal">
            <p className="modal-text">Email Sent! You should receive a confirmation email shortly, it will probably be in your SPAM.</p>
            <button className="close-modal float-right" onClick={props.onClose}>
                {closeImg}
            </button>
        </div>
    )
}