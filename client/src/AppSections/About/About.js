//  COMPONENT imports
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import React from 'react'

//  STYLE imports
import './About.css';

export default function About() {
    return (
        <article className="container">
            <SectionHeader title="About" />
            <div className="about-wrapper">
                {/* <p className="about-text">
                    Hey! I'm Brendan Leighton, pronounced "bren-din lay-tin." I live in northern NH, US, but I am
                    available and seeking
                    remote work. Server-side features involving databases, such as querying and routing, are among my
                    favorite to code. I
                    think that stuff is super cool. I'm not looking for strictly back-end work and am open to all
                    offers. Given adequate
                    time, I can learn and accomplish anything.
                </p> */}
            </div>
        </article>
    )
}
