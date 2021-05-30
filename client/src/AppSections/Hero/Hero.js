import React from 'react'

import CTA from '../../components/CallToAction/CTA'
import imageOfMe from './assets/me.jpeg';

const styles = {
    hero: {
        height: `calc(100vh-70px)`,
        textAlign: `center`
    },
    heroFlex: {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        gap: `3rem`
    },
    figure: {
        display: `flex`,
        justifyContent: `center`
    },
    image: {
        height: `192px`,
        width: `192px`,
        // maxHeight: `300px`,
        // maxWidth: `360px`,
        // minHeight: `200px`,
        // minWidth: `260px`,
        margin: `0, auto`,
        boxShadow: `0px 7px 10px rgba(0, 0, 0, 0.5)`,
        borderRadius: `50%`
    },
    h1: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,

        fontSize: `calc(1.3em + 3vw)`
    },
    h1Name: {
        fontWeight: `800`,
        // fontSize: `calc(1em + 3vw)`,
        textAlign: `center`
    },
    h1Title: {
        fontWeight: `400`,
    }
}

export default function Hero() {
    return (
        <section style={styles.hero} className="container">
            <header style={styles.heroFlex}>
                <figure style={styles.figure}>
                    <img style={styles.image} src={imageOfMe}
                        alt="Me smiling, rocking a bushy beard and a mohawk" />
                </figure>
                <h1 style={styles.h1}>
                    <span style={styles.h1Name}>Brendan Leighton</span>
                    <span style={styles.h1Title}>Web Engineer</span>
                </h1>
                <CTA
                    text="View My Work"
                    sectionId="projects-section"
                />
            </header>
        </section>
    )
}
