import React from 'react'

import './ProjectCard.css';

export default function ProjectCard(props) {

    const displayTechUsed = (technologies) => {

        let string = '';

        technologies.forEach((element, index) => {
            if (index === (technologies.length - 1)) {
                string += `${element}`;
            } else {
                string += `${element} / `;
            }
        });

        return string;
    }

    return (
        <div className="card">
            <img src={props.image} alt={props.imageAlt} />
            <div className="info">
                <h1 className="header">{props.header}</h1>
                <p>{props.text}</p>
                <p>Team Project</p>
                <p>Technologies I Used: {displayTechUsed(props.techUsed)}</p>
                <a href={props.urlCode} className="btn" target="_blank" rel="noreferrer">View Code</a>
                <a href={props.urlSite} className="btn float-right" target="_blank" rel="noreferrer">View Site</a>
            </div>
        </div>
    )
}
