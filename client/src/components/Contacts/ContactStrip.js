import React from 'react'
// ICONS
import { IconContext } from "react-icons"
import { HiOutlineMailOpen } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function ContactStrip(props) {

    const newLine = `%0D%0A`
    const emailBody = `Your Name: ${newLine}Company: ${newLine}Position: ${newLine}Availability For Phone Screen:`
    const emailUrl = `mailto:BR3NDAN.L8N@gmail.com?subject=%7E%7E%7E%20Message%20For%20Job%20%7E%7E%7E&body=${emailBody}`

    let styles = {
        flex: {
            display: `flex`,
            justifyContent: `center`
        }
    }
    if (props.gap) {
        styles.flex.gap = props.gap
    } else {
        styles.flex.gap = `0.5rem`
    }

    return (
        <div style={styles.flex}>
            <IconContext.Provider value={{ color: "white", size: props.size }}>
                <a href={emailUrl} target="blank"><HiOutlineMailOpen /></a>
                <a href="https://www.linkedin.com/in/brendan-leighton/" target="blank"><FaLinkedin /></a>
                <a href='https://github.com/BR3NDAN-L8N' target="blank"><FaGithub /></a>
                <a href="https://twitter.com/StBrendanGames" target="blank"><FaTwitter /></a>
            </IconContext.Provider>
        </div>
    )
}
