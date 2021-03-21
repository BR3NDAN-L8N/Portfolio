//  COMPONENT imports
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import React from 'react'

//  STYLE imports
import './About.css';
import imageOfMe from './assets/me-meme-tiny.png';

export default function About() {
    return (
        <article className="container" id="about-section">
            <SectionHeader title="About" />
            <figure>
                <img className="about-image" src={imageOfMe}
                    alt="shows myself looking away from the camera with the text, 'Me focusing on Zoom meeting'. Then shows the same person with their head turned towards the camera with the text, 'Me checking my angles to make sure I'm still hot.'" />
            </figure>
            <p>
                Hey! I'm Brendan Leighton, pronounced "bren-din lay-tin." I live in northern NH, US, but I am
                available and seeking
                remote work. Server-side features involving databases, such as querying and routing, are among my
                favorite to code. I
                think that stuff is super cool. I'm not looking for strictly back-end work and am open to all
                offers. Given adequate
                time, I can learn and accomplish anything.
                </p>
        </article>
    )
}
