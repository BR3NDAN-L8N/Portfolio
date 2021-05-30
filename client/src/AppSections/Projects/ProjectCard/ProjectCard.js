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
                <h3 className="header">{props.header}</h3>
                <p>{props.text}, Team Project</p>
                <p>Technologies I Used: {displayTechUsed(props.techUsed)}</p>
                <div className="buttons">

                    <button>
                        <a href={props.urlCode} className="btn" target="_blank" rel="noreferrer">View Code</a>
                    </button>
                    <button>
                        <a href={props.urlSite} className="btn" target="_blank" rel="noreferrer">View Site</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
