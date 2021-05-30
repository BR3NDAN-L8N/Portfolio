import React from 'react'


import imageOfMe from './assets/me.jpeg';

const styles = {
    hero: {
        height: `calc(100vh-70px)`
    },
    figure: {
        flex: `1 0 350px`,
        display: `flex`,
        justifyContent: `center`
    },
    image: {
        height: `152`,
        width: `152`,
        // maxHeight: `300px`,
        // maxWidth: `360px`,
        // minHeight: `200px`,
        // minWidth: `260px`,
        margin: `auto`,
        boxShadow: `0px 7px 10px rgba(0, 0, 0, 0.5)`,
        borderRadius: `50%`
    },
    h1: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`
    },
    h1Name: {
        color: `#a756f3`,
        fontSize: `calc(1em + 3vw)`,
        textAlign: `center`
    },
    h1Title: {
        fontSize: `calc(1em+3vw)`
    }
}

export default function Hero() {
    return (
        <section style={styles.hero} className="container">
            <header>
                <figure style={styles.figure}>
                    <img style={styles.image} src={imageOfMe}
                        alt="shows myself looking away from the camera with the text, 'Me focusing on Zoom meeting'. Then shows the same person with their head turned towards the camera with the text, 'Me checking my angles to make sure I'm still hot.'" />
                </figure>
                <h1 style={styles.h1}>
                    <span style={styles.h1Name}>Brendan Leighton!</span>
                    <span style={styles.h1Title}>Web Engineer</span>
                </h1>
                <p>
                    CALL TO ACTION
                </p>
            </header>
        </section>
    )
}
