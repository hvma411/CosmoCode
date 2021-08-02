import React from 'react'
import { ProjectHoverComponent } from './ProjectHoverComponent'

export const Projects = ({ projects }) => {
    return (
        <>
            { projects.map(project => (
                <li key={project.id} className={`project-box ${project.type === "web" ? "web-box" : ""}`}>
                    {project.type === "web" ?
                        <>
                            <div className={`desktop-mockup ${project.className}`}></div>
                            <div className={`mobile-mockup ${project.className}-mobile`}></div>
                        </>
                        :
                        <div className={`art ${project.className}`}></div>
                    }
                    <ProjectHoverComponent />
                </li>
            ))}
        </>
    )
}
