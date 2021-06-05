import React from 'react'
import {Link} from 'react-scroll'
// import NavbarLink from '../Navbar/NavbarLink/NavbarLink'

export default function CTA(props) {
    const styles = {
        button: {
            backgroundColor: `var(--primary-color)`
        }
    }
    return (
        <button>
            <Link
                to={props.sectionId}
                smooth="true"
                duration={500}
                delay={0}
                offset={-75}
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
