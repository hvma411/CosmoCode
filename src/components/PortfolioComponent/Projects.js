import React from 'react'
import { ProjectHoverComponent } from './ProjectHoverComponent'

export const Projects = ({ projects, projectName }) => {
    return (
        <>
            { projects.map(project => (
                <li key={project.id} className={`project-box ${project.type === "web" ? "web-box" : ""}`}>
                    {project.type === "web" ?
                        <>
                            <h2>{project.name}</h2>
                            <ul className="tech-stack-list">
                                {project.projectTechStack.map((el, idx) => (
                                    <li key={idx}>{el}</li>
                                ))}
                            </ul>
                            {/* <div className={`desktop-mockup web1`}></div> */}
                            <img src={`./src/utils/assets/${project.fileName}`} className="desktop-image" />
                            <div className={`mobile-mockup web1-mobile`}></div>
                        </>
                        :
                        <div className={`art web1`}></div>
                    }
                    <ProjectHoverComponent projectName={project.projectName} />
                </li>
            ))}
        </>
    )
}
