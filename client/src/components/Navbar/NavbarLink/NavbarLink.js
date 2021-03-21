import React from 'react'
import { Link } from 'react-scroll';

//  STYLE imports
import './NavbarLink.css';

export default function NavbarLink(props) {

    return (
        <Link
            className="nav-link"
            to={props.id}
            smooth="true"
            duration={500}
        >{props.name}
        </Link>
    )
}
