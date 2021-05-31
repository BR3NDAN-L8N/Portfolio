import React from 'react'

export default function Tooltip(props) {

    return (
        <span className="tooltip">
            {props.for}
            <span className="tooltip-text">{ props.text }</span>
        </span>
    )
}
