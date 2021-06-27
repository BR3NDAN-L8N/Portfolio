import React from 'react';
//  COMPONENTS
import NavbarLink from './NavbarLink/NavbarLink';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './SideDrawer/BackDrop';
//  STYLESHEET
import './Navbar.css';
//  ICONS
import { IconContext } from "react-icons"
import { FaHamburger } from 'react-icons/fa'
import { GiTopHat } from 'react-icons/gi'

export default function Navbar() {


    const [displaySideDrawer, setDisplaySideDrawer] = React.useState(false);

    const toggleSideDrawer = () => {
        setDisplaySideDrawer(prevState => !prevState);
    }



    return (
        <nav id="navbar">
            <IconContext.Provider value={{ color: "#340d54", size: "2rem", hover: { color: "white" } }}>
                <NavbarLink
                    name={<GiTopHat />}
                    id="scroll-top"
                />
            </IconContext.Provider>

            <span className="nav-links">
                <NavbarLink
                    name="About"
                    id="about-section"
                />
                <NavbarLink
                    name="Projects"
                    id="projects-section"
                />
                <NavbarLink
                    name="Contact"
                    id="contact-section"
                />
            </span>
            <IconContext.Provider value={{ color: "#340d54", size: "2rem" }}>
                <button className="fa-bars-button" onClick={toggleSideDrawer}>
                    <FaHamburger />
                </button>
            </IconContext.Provider>
            <SideDrawer
                open={displaySideDrawer}
                onClick={toggleSideDrawer}
            />
            <BackDrop
                display={displaySideDrawer}
                onClick={toggleSideDrawer}
            />
        </nav>
    )
}
