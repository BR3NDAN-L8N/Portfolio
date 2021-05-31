//  COMPONENT imports
import SectionHeader from "../../components/SectionHeader/SectionHeader"

import React from 'react'
import { IconContext } from "react-icons"
import { SiReact, SiJavascript, SiNodeDotJs, SiMongodb, SiHtml5, SiCss3 } from 'react-icons/si'
import Tooltip from '../../components/Tooltip/Tooltip'

//  STYLE imports
import './About.css';

export default function About() {

    const styles = {
        iconsContainer: {
            fontSize: `5rem`,
            width: `100%`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            gap: `1rem`
        },
        row1and3: {
            display: `flex`,
            justifyContent: `center`,
            gap: `1rem`,
            fontSize: `3rem`
        },
        row2: {
            display: `flex`,
            justifyContent: `space-between`,
            gap: `2rem`
        },
        centerText: {
            margin: `auto`
        }
    }
    return (
        <article className="container">
            <SectionHeader title="About" />
            <article>
                <div style={styles.iconsContainer}>
                    <IconContext.Provider value={{ size: "3rem" }}>
                        <div style={styles.row1and3}>
                            <Tooltip
                                for={<SiHtml5 color="#e44d26" />}
                                text="HTML5"
                            />
                            <Tooltip
                                for={<SiCss3 color="#264de4" />}
                                text="CSS3"
                            />
                        </div>
                        <div style={styles.row2}>
                            <Tooltip
                                for={<SiJavascript color="#f0db4f" />}
                                text="JavaScript"
                            />
                            <p style={styles.centerText}>TECH</p>
                            <Tooltip
                                for={<SiReact color="#61dbfb" />}
                                text="React"
                            />
                        </div>
                        <div style={styles.row1and3}>
                            <Tooltip
                                for={<SiNodeDotJs color="#6ba063" />}
                                text="Node.js"
                            />
                            <Tooltip
                                for={<SiMongodb color="#3fa037" />}
                                text="MongoDB"
                            />
                        </div>
                    </IconContext.Provider>

                    {/* Strength & Weakness lists? */}

                </div>
            </article>
        </article>
    )
}
