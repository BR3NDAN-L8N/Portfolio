import React from 'react'

import CTA from '../../components/CallToAction/CTA'
import ContactStrip from '../../components/Contacts/ContactStrip'
import imageOfMe from './assets/me.jpeg';

const styles = {
    hero: {
        height: `100vh`,
        textAlign: `center`
    },
    heroFlex: {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        gap: `2rem`
    },
    figure: {
        display: `flex`,
        justifyContent: `center`
    },
    image: {
        height: `192px`,
        width: `192px`,
        margin: `0, auto`,
        boxShadow: `0px 7px 10px rgba(0, 0, 0, 0.5)`,
        borderRadius: `50%`
    },
    h1: {
        fontWeight: `800`,
        textAlign: `center`
    },
    heroSubtitle: {
        fontWeight: `400`,
        padding: 'none',
        margin: 'none'
    }
}

export default function Hero() {
    return (
        <section style={styles.hero} className="container grid-hero">
            <header style={styles.heroFlex}>
                <figure style={styles.figure}>
                    <img style={styles.image} src={imageOfMe}
                        alt="Me smiling, rocking a bushy beard and a mohawk" />
                </figure>
                <h1 style={styles.h1}>Brendan Leighton</h1>
                <p style={styles.heroSubtitle}>Web Engineer</p>
                <ContactStrip 
                    size="1.3rem"
                />
                <CTA
                    text="View My Work"
                    sectionId="projects-section"
                />
            </header>
        </section>
    )
}
