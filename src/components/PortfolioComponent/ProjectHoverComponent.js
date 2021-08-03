import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../../redux/actions.js';
import { projectData } from './ProjectsData.js';

export const ProjectHoverComponent = ({ projectName }) => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(allActions.switchProjectViewVisibility())
        dispatch(allActions.setVisibleProject(projectData[projectName]))
        console.log(projectData[projectName])
    }

    return (
        <div className="project-hover-box" onClick={onClick}>
            <FontAwesomeIcon icon={faSearchPlus} />
        </div>
    )
}
