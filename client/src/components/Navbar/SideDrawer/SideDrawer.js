import React from 'react'
import ReactDom from 'react-dom'
//  COMPONENTS
import NavbarLink from '../NavbarLink/NavbarLink'
import './SideDrawer.css';
//  ICONS
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IconContext } from "react-icons"

export default function SideDrawer(props) {

    if (!props.open) return null;

    // 
    return ReactDom.createPortal(
        <div className="side-drawer">
            <IconContext.Provider value={{ color: "#340d54" }}>
                <button className="close-drawer" onClick={props.onClick}>
                    <AiOutlineCloseCircle />
                </button>
            </IconContext.Provider>
            <NavbarLink
                name="Top"
                id="scroll-top"
                sideDrawer='true'
                onClick={props.onClick}
            />
            <NavbarLink
                name="About"
                id="about-section"
                sideDrawer='true'
                onClick={props.onClick}
            />
            <NavbarLink
                name="Projects"
                id="projects-section"
                sideDrawer='true'
                onClick={props.onClick}
            />
            <NavbarLink
                name="Contact"
                id="contact-section"
                sideDrawer='true'
                onClick={props.onClick}
            />
        </div>
        , document.getElementById('portal')
    )
}
