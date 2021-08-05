import React from 'react'
import { ProjectHoverComponent } from './ProjectHoverComponent'

export const Projects = ({ projects }) => {
    return (
        <>
            { projects.map(project => (
                <li key={project.id} className={`project-box ${project.type === "web" ? "web-box" : ""}`}>
                    {project.type === "web" ?
                        <>
                            <div className="text-box">
                                <h2>{project.name}</h2>
                                <ul className="tech-stack-list">
                                    {project.projectTechStack.map((el, idx) => (
                                        <li key={idx}>{el}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mockups-wrapper">
                                <img src={`./src/utils/assets/${project.fileName}`} className="desktop-image" />
                                {project.mobileFileName ? <img src={`./src/utils/assets/${project.mobileFileName}`} className="mobile-image" /> : ""}
                            </div>
                        </>
                        :
                        <img src={`./src/utils/assets/${project.fileName}`} className="art-image" />
                    }
                    <ProjectHoverComponent projectName={project.projectName} />
                </li>
            ))}
        </>
    )
}
