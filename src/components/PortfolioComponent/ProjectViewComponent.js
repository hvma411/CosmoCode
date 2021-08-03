import { faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../../redux/actions.js';
import { ProjectType } from './ProjectsData.js';

export const ProjectViewComponent = () => {

    const projectData = useSelector((state) => state.reducer)

    const dispatch = useDispatch()

    const handleCloseClick = () => {
        dispatch(allActions.switchProjectViewVisibility())
    }

    return (
        <div className="project-view-wrapper">
            <div className="close-btn-wrapper" onClick={handleCloseClick}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            { projectData.projectType === ProjectType.WEB ?
                <WebProject projectData={projectData} />
                :
                <ArtProject projectData={projectData} />
            }
        </div>
    )
}

const WebProject = ({ projectData }) => {
    return (
        <>
            <div className="project-info-wrapper">
                <h2 className="project-title">{projectData.projectTitle}</h2>
                <p className="project-description">{projectData.projectDescription}</p>
                <ul className="tech-stack-list">
                    {projectData.projectTechStack.map((el, idx) => (
                        <li key={idx}>{el}</li>
                    ))}
                </ul>
                {projectData.projectUrl ? <a href={projectData.projectUrl}>Click here to visit website</a> : ""}
            </div>
            <div className="desktop-project-wrapper ">
                <div className={`web-image desktop-${projectData.className}`}></div>
            </div>
            {projectData.RWD ?
                <div className="mobile-project-wrapper">
                    <div className={`web-image mobile-${projectData.className}`}></div>
                </div>
                : ""
            }

        </>
    )
}

const ArtProject = ({ projectData }) => {
    return (
        <>
            <div className="project-info-wrapper">
                <h2 className="project-title">{projectData.projectTitle}</h2>
                <p className="project-description">{projectData.projectDescription}</p>

            </div>
            <div className="art-wrapper">
                <div className="art1 art"></div>
            </div>
        </>
    )
}
