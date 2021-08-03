import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProjectHoverComponent } from "./ProjectHoverComponent";
import { Projects } from "./Projects";
import { ProjectViewComponent } from "./ProjectViewComponent";
import { ProjectName } from './ProjectsData.js';

const PortfolioComponent = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const isProjectViewVisible = useSelector((state) => state.reducer.isProjectViewVisible)

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
            { isProjectViewVisible ? <ProjectViewComponent /> : null}
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
                className: "web1",
                type: "web",
                projectName: ProjectName.ZIELONOJEMY
            },
            {
                id: 2,
                className: "web2",
                type: "web",
                projectName: ProjectName.CMS
            },
            {
                id: 3,
                className: "web3",
                type: "web",
                projectName: ProjectName.BEST_SHOP
            },
            {
                id: 4,
                className: "web4",
                type: "web",
                projectName: ProjectName.COSMO_CODE
            }
        ],
        art: [
            {
                id: 1,
                className: "art1",
                type: "art",
                projectName: ProjectName.PYRAMIDS
            },
            {
                id: 2,
                className: "art2",
                type: "art",
                projectName: ProjectName.SAND_DUNES
            },
            {
                id: 3,
                className: "art3",
                type: "art",
                projectName: ProjectName.ECLIPSE
            },
            {
                id: 4,
                className: "art4",
                type: "art",
                projectName: ProjectName.MOUNTAINS
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
                            <div className="project-box web-box">
                                <div className="desktop-mockup web1"></div>
                                <div className="mobile-mockup web1-mobile"></div>
                                <ProjectHoverComponent projectName={ProjectName.ZIELONOJEMY} />

                            </div>
                            <div className="project-box web-box">
                                <div className="desktop-mockup web2"></div>
                                <ProjectHoverComponent projectName={ProjectName.CMS} />

                            </div>
                        </div>
                        <div className="projects-column reverse-column">
                            <div className="project-box web-box">
                                <div className="desktop-mockup web3"></div>
                                <div className="mobile-mockup web3-mobile"></div>
                                <ProjectHoverComponent className="web3" />

                            </div>
                            <div className="project-box web-box">
                                <div className="desktop-mockup web4"></div>
                                <div className="mobile-mockup web4-mobile"></div>
                                <ProjectHoverComponent className="web4" />

                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="projects-column">
                            <div className="project-box">
                                <div className="art art1"></div>
                                <ProjectHoverComponent className="art1" />

                            </div>
                            <div className="project-box">
                                <div className="art art2"></div>
                                <ProjectHoverComponent className="art2" />

                            </div>
                        </div>
                        <div className="projects-column reverse-column">
                            <div className="project-box">
                                <div className="art art3"></div>
                                <ProjectHoverComponent className="art3" />

                            </div>
                            <div className="project-box">
                                <div className="art art4"></div>
                                <ProjectHoverComponent className="art4" />

                            </div>
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
                <div className="project-box web-box">
                    <div className="desktop-mockup web1"></div>
                    <div className="mobile-mockup web1-mobile"></div>
                    <ProjectHoverComponent projectName={ProjectName.ZIELONOJEMY} />
                </div>
                <div className="project-box">
                    <div className="art art1"></div>
                    <ProjectHoverComponent className="art1" />

                </div>
            </div>
            <div className="projects-column reverse-column">
                <div className="project-box">
                    <div className="art art2"></div>
                    <ProjectHoverComponent className="web2" />

                </div>
                <div className="project-box web-box">
                    <div className="desktop-mockup web2"></div>
                    <ProjectHoverComponent projectName={ProjectName.CMS} />

                </div>
            </div>
            <div className="projects-column">
                <div className="project-box web-box">
                    <div className="desktop-mockup web3"></div>
                    <div className="mobile-mockup web3-mobile"></div>
                    <ProjectHoverComponent className="web3" />

                </div>
                <div className="project-box">
                    <div className="art art3"></div>
                    <ProjectHoverComponent className="art3" />

                </div>
            </div>
            <div className="projects-column reverse-column">
                <div className="project-box">
                    <div className="art art4"></div>
                    <ProjectHoverComponent className="art4" />

                </div>
                <div className="project-box web-box">
                    <div className="desktop-mockup web4"></div>
                    <div className="mobile-mockup web4-mobile"></div>
                    <ProjectHoverComponent className="web4" />

                </div>
            </div>
        </div>
    )
}

export default PortfolioComponent;