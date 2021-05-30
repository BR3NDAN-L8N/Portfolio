import React from 'react';
//  COMPONENTS
import NavbarLink from './NavbarLink/NavbarLink';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './SideDrawer/BackDrop';
//  STYLESHEET
import './Navbar.css';
//  FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {


    const [displaySideDrawer, setDisplaySideDrawer] = React.useState(false);

    const toggleSideDrawer = () => {
        setDisplaySideDrawer(prevState => !prevState);
    }

    const hamburgerMenu = <FontAwesomeIcon icon={faBars} />

    

    return (
        <nav id="navbar">
            <NavbarLink
                name="Home"
                id="scroll-top"
            />

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
            <button className="fa-bars-button" onClick={toggleSideDrawer}>
                    {hamburgerMenu}
            </button>
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
