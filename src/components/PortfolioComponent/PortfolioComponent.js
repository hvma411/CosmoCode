import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProjectHoverComponent } from "./ProjectHoverComponent";
import { Projects } from "./Projects";
import { ProjectViewComponent } from "./ProjectViewComponent";
import { ProjectName } from './ProjectsData.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

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

const projects = {
    web: [
        {
            id: 1,
            name: "Zielonojemy",
            fileName: "ZielonojemyDesktopMockup.png",
            mobileFileName: "ZielonojemyMobileMockup.png",
            type: "web",
            projectName: ProjectName.ZIELONOJEMY,
            projectTechStack: [
                "React",
                "Firebase",
                "Scss"
            ],
        },
        {
            id: 2,
            name: "Zdrowo i Pozytywnie",
            fileName: "ZipDesktopMockup.png",
            type: "web",
            projectName: ProjectName.ZDROWO_I_POZYTYWNIE,
            projectTechStack: [
                "React",
                "Firebase",
                "Scss"
            ],
        },
        {
            id: 3,
            name: "Best Shop",
            fileName: "BestShopDesktopMockup.png",
            mobileFileName: "BestShopMobileMockup.png",
            type: "web",
            projectName: ProjectName.BEST_SHOP,
            projectTechStack: [
                "React",
                "Firebase",
                "Scss"
            ],
        },
        {
            id: 4,
            name: "CosmoCode",
            fileName: "CosmoCodeDesktopMockup.png",
            mobileFileName: "CosmoCodeMobileMockup.png",
            type: "web",
            projectName: ProjectName.COSMO_CODE,
            projectTechStack: [
                "React",
                "Firebase",
                "Scss"
            ],
        }
    ],
    art: [
        {
            id: 1,
            fileName: "art1.jpg",
            type: "art",
            projectName: ProjectName.PYRAMIDS,
        },
        {
            id: 2,
            fileName: "art2.jpg",
            type: "art",
            projectName: ProjectName.SAND_DUNES
        },
        {
            id: 3,
            fileName: "art3.jpg",
            type: "art",
            projectName: ProjectName.ECLIPSE
        },
        {
            id: 4,
            fileName: "art4.jpg",
            type: "art",
            projectName: ProjectName.MOUNTAINS
        }
    ]
}

const MobileView = () => {
    const [projectsType, setProjectsType] = useState("web");
    const [projectsPerPage, setProjectsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);

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
                <ul className="projects-column mobile-horizontal">
                    {projectsType === "web" ?
                        <Projects projects={currentWebProjects} />
                        :
                        <Projects projects={currentArtProjects} />
                    }
                </ul>
            </div>
            <div className="projects-nav">
                <span className="nav-arrow left-arrow" onClick={prevPage}></span>
                <li className={`nav-item ${projectsType === "web" ? "active-ico" : ""}`} id="web" onClick={changeType}>
                    <FontAwesomeIcon icon={faNetworkWired} />
                    <span>WEB</span>
                </li>
                <li className={`nav-item ${projectsType === "art" ? "active-ico" : ""}`} id="art" onClick={changeType}>
                    <FontAwesomeIcon icon={faPaintBrush} />
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
                        <ul className="projects-column">
                            <Projects projects={projects.web.slice(0, 2)} />
                        </ul>
                        <ul className="projects-column reverse-column">
                            <Projects projects={projects.web.slice(2)} />
                        </ul>
                    </>
                    :
                    <>
                        <ul className="projects-column">
                            <Projects projects={projects.art.slice(0, 2)} />
                        </ul>
                        <ul className="projects-column reverse-column">
                            <Projects projects={projects.art.slice(2)} />
                        </ul>
                    </>
                }

            </div>
            <ul className="projects-nav">
                <li className={`nav-item ${projectsType === "web" ? "active-ico" : ""}`} id="web" onClick={changeType}>
                    <FontAwesomeIcon icon={faNetworkWired} />
                    <span>WEB</span>
                </li>
                <li className={`nav-item ${projectsType === "art" ? "active-ico" : ""}`} id="art" onClick={changeType}>
                    <FontAwesomeIcon icon={faPaintBrush} />
                    <span>ART</span>
                </li>
            </ul>
        </>
    )
}

const DesktopView = () => {

    const getProjectTechStack = (name) => {
        return projects.web.filter(e => e.projectName === name)
            .shift()
            .projectTechStack
    }

    return (
        <div className="projects-wrapper">
            <div className="projects-column">
                <div className="project-box web-box">
                    <div className="text-box">
                        <h2>{ProjectName.ZIELONOJEMY}</h2>
                        <ul className="tech-stack-list">
                            {getProjectTechStack(ProjectName.ZIELONOJEMY)
                                .map((el, idx) => (
                                    <li key={idx}>
                                        {el}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="mockups-wrapper">
                        <img src="./src/utils/assets/ZielonojemyDesktopMockup.png" className="desktop-image" />
                        <img src="./src/utils/assets/ZielonojemyMobileMockup.png" className="mobile-image" />
                    </div>
                    <ProjectHoverComponent projectName={ProjectName.ZIELONOJEMY} />
                </div>
                <div className="project-box">
                    <img src={`./src/utils/assets/art1.jpg`} className="art-image" />
                    <ProjectHoverComponent projectName={ProjectName.PYRAMIDS} />

                </div>
            </div>
            <div className="projects-column reverse-column">
                <div className="project-box">
                    <img src={`./src/utils/assets/art2.jpg`} className="art-image" />
                    <ProjectHoverComponent projectName={ProjectName.SAND_DUNES} />
                </div>
                <div className="project-box web-box">
                    <div className="text-box">
                        <h2>{ProjectName.ZDROWO_I_POZYTYWNIE}</h2>
                        <ul className="tech-stack-list">
                            {getProjectTechStack(ProjectName.ZDROWO_I_POZYTYWNIE)
                                .map((el, idx) => (
                                    <li key={idx}>
                                        {el}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="mockups-wrapper">
                        <img src="./src/utils/assets/ZipDesktopMockup.png" className="desktop-image" />
                    </div>
                    <ProjectHoverComponent projectName={ProjectName.ZDROWO_I_POZYTYWNIE} />
                </div>
            </div>
            <div className="projects-column">
                <div className="project-box web-box">
                    <div className="text-box">
                        <h2>{ProjectName.BEST_SHOP}</h2>
                        <ul className="tech-stack-list">
                            {getProjectTechStack(ProjectName.BEST_SHOP)
                                .map((el, idx) => (
                                    <li key={idx}>
                                        {el}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="mockups-wrapper">
                        <img src="./src/utils/assets/BestShopDesktopMockup.png" className="desktop-image" />
                        <img src="./src/utils/assets/BestShopMobileMockup.png" className="mobile-image" />
                    </div>
                    <ProjectHoverComponent projectName={ProjectName.BEST_SHOP} />
                </div>
                <div className="project-box">
                    <img src={`./src/utils/assets/art3.jpg`} className="art-image" />
                    <ProjectHoverComponent projectName={ProjectName.ECLIPSE} />
                </div>
            </div>
            <div className="projects-column reverse-column">
                <div className="project-box">
                    <img src={`./src/utils/assets/art4.jpg`} className="art-image" />
                    <ProjectHoverComponent projectName={ProjectName.MOUNTAINS} />
                </div>
                <div className="project-box web-box">
                    <div className="text-box">
                        <h2>{ProjectName.COSMO_CODE}</h2>
                        <ul className="tech-stack-list">
                            {getProjectTechStack(ProjectName.COSMO_CODE)
                                .map((el, idx) => (
                                    <li key={idx}>
                                        {el}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="mockups-wrapper">
                        <img src="./src/utils/assets/CosmoCodeDesktopMockup.png" className="desktop-image" />
                        <img src="./src/utils/assets/CosmoCodeMobileMockup.png" className="mobile-image" />
                    </div>
                    <ProjectHoverComponent projectName={ProjectName.COSMO_CODE} />

                </div>
            </div>
        </div>
    )
}

export default PortfolioComponent;