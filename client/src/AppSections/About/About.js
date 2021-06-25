import React from 'react'
//  COMPONENT imports
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import Tooltip from '../../components/Tooltip/Tooltip'
//  ICONS
import { IconContext } from "react-icons"
import { SiReact, SiJavascript, SiNodeDotJs, SiMongodb, SiHtml5, SiCss3 } from 'react-icons/si'
import { IoLogoGameControllerB } from 'react-icons/io'
import { MdComputer } from 'react-icons/md'
import { GiTakeMyMoney } from 'react-icons/gi'
import { RiMentalHealthFill, RiStockFill, RiEmotionLaughFill } from 'react-icons/ri'

//  STYLE imports
import './About.css';

export default function About() {

    return (
        <article className="container About">
            <SectionHeader title="About" />
            <div className="about-content">
                <p className="techs-text">
                    During early COVID, I decided to focus my attention full-time on my dream of being a programmer. I'm currently seeking a role that allows me to use my favorite technologies, discover new great technologies, and ultimately loving what I'm doing.
                </p>
                <div className="icons-container tech-icons">
                    <IconContext.Provider value={{ size: "3em" }}>
                        <div className="row1-and-3">
                            <Tooltip
                                for={<SiHtml5 color="#e44d26" />}
                                text="HTML5"
                            />
                            <Tooltip
                                for={<SiCss3 color="#264de4" />}
                                text="CSS3"
                            />
                        </div>
                        <div className="row2">
                            <Tooltip
                                for={<SiJavascript color="#f0db4f" />}
                                text="JavaScript"
                            />
                            <p className="circular-icons-center-text">TECHS</p>
                            <Tooltip
                                for={<SiReact color="#61dbfb" />}
                                text="React"
                            />
                        </div>
                        <div className="row1-and-3">
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
                </div>
                <p className="personal-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid amet porro iste accusamus suscipit, perferendis rerum blanditiis numquam consequatur, sit quia veniam necessitatibus excepturi inventore? Quibusdam, laudantium nihil? Cum?
                </p>
                <div className="icons-container personal-icons">
                    <IconContext.Provider value={{ size: "3rem" }}>
                        <div className="row1-and-3">
                            <Tooltip
                                for={<IoLogoGameControllerB color="#349bd6" />}
                                text="PC Gaming"
                            />
                            <Tooltip
                                for={<MdComputer color="white" />}
                                text="Computer Hardware"
                            />
                        </div>
                        <div className="row2">
                            <Tooltip
                                for={<GiTakeMyMoney color="#168b1c" />}
                                text="Personal Finances"
                            />
                            <p className="circular-icons-center-text">HOBBY</p>
                            <Tooltip
                                for={<RiStockFill color="#b81d1d" />}
                                text="Stock Market Investing"
                            />
                        </div>
                        <div className="row1-and-3">
                            <Tooltip
                                for={<RiEmotionLaughFill color="#e7d911" />}
                                text="Standup Comedy"
                            />
                            <Tooltip
                                for={<RiMentalHealthFill color="#ec2fad" />}
                                text="Psychology"
                            />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            {/* Strength & Weakness lists? */}
        </article>
    )
}
