import React from 'react'

import './sectionHeader.css';

export default function SectionHeader(props) {

    const createId = (title) => {
        if (title === "Get In Touch!") {
            title = 'contact';
        }
        return `${title.toLowerCase()}-section`;
    }
    return (
        <h2
            className="section-header"
            id={createId(props.title)}
        >{props.title}</h2>
    )
}
