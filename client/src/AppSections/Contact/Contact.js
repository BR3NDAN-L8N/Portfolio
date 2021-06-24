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
            <ul>
                {/* Refer to contactStrip.js for a breakdown of the email url */}
                <li>Email: <a href="mailto:BR3NDAN.L8N@gmail.com?subject=%7E%7E%7E%20Message%20For%20Job%20%7E%7E%7E&body=Your%20Name:%20%0D%0ACompany:%20%0D%0APosition:%20%0D%0AAvailability%20For%20Phone%20Screen:" target="blank">BR3NDAN.L8N@gmail.com</a></li>
                <li>Availability: Mon-Fri, 9am-5pm EST</li>
            </ul>
            <ContactStrip
                display="flex"
                size="3rem"
                gap="1rem"
            />
        </article>
    )
}
