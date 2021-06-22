import React from 'react'

export const Projects = ({ projects }) => {
    return (
        <>
            { projects.map(project => (
                <li key={project.id} className="project-box">{project.title}</li>
            ))}
        </>
    )
}
