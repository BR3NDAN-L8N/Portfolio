import React from 'react'
import {Link} from 'react-scroll'
// import NavbarLink from '../Navbar/NavbarLink/NavbarLink'

import './CTA.css'

export default function CTA(props) {
    // const styles = {
    //     button: {
    //         backgroundColor: `var(--primary-color)`
    //     }
    // }
    return (
        <button className="call-to-action">
            <Link
                to={props.sectionId}
                smooth="true"
                duration={500}
                delay={0}
                offset={-65}
            >
                {props.text}
            </Link>
        </button>
        // <NavbarLink
        //     name={props.text}
        //     id={props.sectionId}
        // />
    )
}
