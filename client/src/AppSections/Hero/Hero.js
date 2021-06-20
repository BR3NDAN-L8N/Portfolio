import React from 'react'

import CTA from '../../components/CallToAction/CTA'
import ContactStrip from '../../components/Contacts/ContactStrip'
import NavbarLink from '../../components/Navbar/NavbarLink/NavbarLink'
import imageOfMe from './assets/me.jpeg'

import brickWall from '../../assets/brick-wall.jpg'
import './Hero.css'

export default function Hero() {
    return (
        <section className="container hero grid-hero">
            <header>
                <figure>
                    <img src={imageOfMe} className="hero-image"
                        alt="Me smiling, rocking a bushy beard and a mohawk" />
                </figure>
                <h1>Brendan Leighton</h1>
                <p>Web Engineer</p>
                <ContactStrip 
                    size="1.3rem"
                />
                <CTA
                    text="View My Work"
                    sectionId="projects-section"
                />
                <nav className="desktop-nav">
                    <NavbarLink
                        name="About"
                        id="about-section"
                    />
                    <NavbarLink
                        name="Projects"
                        id="projects-section"
                    />
                </nav>
            </header>
        </section>
    )
}
