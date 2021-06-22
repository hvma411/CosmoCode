import React, { useState, useEffect } from "react";
import { Projects } from "./Projects";

const PortfolioComponent = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div className="portfolio-component router-transition">
            { width < 768 ? <MobileView /> : null}
            { width >= 768 && width < 1280 ? <TabletView /> : null}
            { width >= 1280 ? <DesktopView /> : null}
        </div>
    )
}

const MobileView = () => {
    const [projectsType, setProjectsType] = useState("web");
    const [projectsPerPage, setProjectsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);

    const projects = {
        web: [
            {
                id: 1,
                title: "web1"
            },
            {
                id: 2,
                title: "web2"
            },
            {
                id: 3,
                title: "web3"
            },
            {
                id: 4,
                title: "web4"
            }
        ],
        art: [
            {
                id: 1,
                title: "art1"
            },
            {
                id: 2,
                title: "art2"
            },
            {
                id: 3,
                title: "art3"
            },
            {
                id: 4,
                title: "art4"
            }
        ]
    }

    const nextPage = () => {
        if (currentPage === projects[projectsType].length / projectsPerPage) {
            setCurrentPage(1)
        } else {
            setCurrentPage(prevPage => prevPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage === 1) {
            setCurrentPage(projects[projectsType].length / projectsPerPage)
        } else {
            setCurrentPage(prevPage => prevPage - 1)
        }
    }

    const changeType = (e) => {
        setCurrentPage(1);

        if (e.currentTarget.id === "web") {
            setProjectsType("web");
        } else {
            setProjectsType("art")
        }
    }

    const lastProjectIndex = currentPage * projectsPerPage;
    const firstProjectIndex = lastProjectIndex - projectsPerPage;
    const currentWebProjects = projects.web.slice(firstProjectIndex, lastProjectIndex);
    const currentArtProjects = projects.art.slice(firstProjectIndex, lastProjectIndex);

    return (
        <>
            <div className="projects-wrapper">
                <ul className="projects-column">
                    {projectsType === "web" ?
                        <Projects projects={currentWebProjects} />
                        :
                        <Projects projects={currentArtProjects} />
                    }
                </ul>
            </div>
            <div className="projects-nav">
                <span className="nav-arrow left-arrow" onClick={prevPage}></span>
                <li className="nav-item" id="web" onClick={changeType}>
                    <i className="web-ico"></i>
                    <span>WEB</span>
                </li>
                <li className="nav-item" id="art" onClick={changeType}>
                    <i className="art-ico"></i>
                    <span>ART</span>
                </li>
                <span className="nav-arrow right-arrow" onClick={nextPage}></span>
            </div>
        </>
    )
}

const TabletView = () => {
    const [projectsType, setProjectsType] = useState("web");

    const changeType = (e) => {
        if (e.currentTarget.id === "web") {
            setProjectsType("web");
        } else {
            setProjectsType("art")
        }
    }
    return (
        <>
            <div className="projects-wrapper">
                {projectsType === "web" ?
                    <>
                        <div className="projects-column">
                            <div className="project-box">dc</div>
                            <div className="project-box">dc</div>
                        </div>
                        <div className="projects-column reverse-column">
                            <div className="project-box">dc</div>
                            <div className="project-box">dc</div>
                        </div>
                    </>
                    :
                    <>
                        <div className="projects-column">
                            <div className="project-box">ac</div>
                            <div className="project-box">ac</div>
                        </div>
                        <div className="projects-column reverse-column">
                            <div className="project-box">ac</div>
                            <div className="project-box">ac</div>
                        </div>
                    </>
                }
            </div>
            <ul className="projects-nav">
                <li className="nav-item" id="web" onClick={changeType}>
                    <i className="web-ico"></i>
                    <span>WEB DEV</span>
                </li>
                <li className="nav-item" id="art" onClick={changeType}>
                    <i className="art-ico"></i>
                    <span>ART</span>
                </li>
            </ul>
        </>
    )
}

const DesktopView = () => {
    return (
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
    )
}

export default PortfolioComponent;