//  REACT imports
import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
//  STYLE imports
import './Contact.css';
//  COMPONENT imports
import ContactStrip from '../../components/Contacts/ContactStrip'

export default function Contact() {

    return (
        <article className="contact container">
            <SectionHeader
                title="Get In Touch!"
            />
            <ContactStrip
                display="flex"
                size="3rem"
                gap="1rem"
            />
        </article>
    )
}
