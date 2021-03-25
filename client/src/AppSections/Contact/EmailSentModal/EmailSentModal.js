import React from 'react'

import './EmailSentModal.css';
import closeImg from './assets/close7.png';

export default function EmailSentModal(props) {

    const addToStyleClasses = (display) => {
        let styleClasses = 'email-modal';
        if (display) return styleClasses += ' display-modal';
        if (display) return styleClasses += ' hide-modal';
    }

    return (
        <div className={addToStyleClasses(props.display)}>
            <p>Email Sent!</p>
            <button>
                <img src={closeImg} className="" alt="" />
            </button>
        </div>
    )
}