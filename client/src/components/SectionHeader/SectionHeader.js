import React from 'react'

import './sectionHeader.css';

export default function SectionHeader(props) {
    return (
        <header>
            <h2 className="section-header">{props.title}</h2>
        </header>
    )
}
