import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ProjectHoverComponent = ({ className }) => {

    const onClick = () => {
        console.log(className)
    }

    return (
        <div className="project-hover-box" onClick={onClick}>
            <FontAwesomeIcon icon={faSearchPlus} />
        </div>
    )
}
