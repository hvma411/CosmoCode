import React from "react";

const PortfolioComponent = () => {
    return (
        <div className="portfolio-component router-transition">
            <div className="projects-wrapper">
                <div className="projects-column">
                    <div className="project-box"></div>
                    <div className="project-box"></div>
                </div>
                <div className="projects-column reverse-column">
                    <div className="project-box"></div>
                    <div className="project-box"></div>
                </div>
                <div className="projects-column">
                    <div className="project-box"></div>
                    <div className="project-box"></div>
                </div>
                <div className="projects-column reverse-column">
                    <div className="project-box"></div>
                    <div className="project-box"></div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioComponent;