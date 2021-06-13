import React, { useState, useEffect } from "react";

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
    const [projectsPage, setProjectsPage] = useState(1);
    const [projectsType, setProjectsType] = useState("web");

    const nextPage = () => {
        if (projectsPage === 2) {
            setProjectsPage(1)
        } else {
            setProjectsPage(projectsPage + 1)
        }
    }

    const prevPage = () => {
        if (projectsPage === 1) {
            setProjectsPage(2)
        } else {
            setProjectsPage(projectsPage - 1)
        }
    }

    const changeType = (e) => {
        setProjectsPage(1);

        if (e.currentTarget.id === "web") {
            setProjectsType("web");
        } else {
            setProjectsType("art")
        }
    }
    return (
        <>
            <div className="projects-wrapper">
                {projectsPage === 1 ?
                    <div className="projects-column">
                        {projectsType === "web" ?
                            <>
                                <div className="project-box">web1</div>
                                <div className="project-box">web1</div>
                            </>
                            :
                            <>
                                <div className="project-box">art1</div>
                                <div className="project-box">art1</div>
                            </>
                        }
                    </div>
                    :
                    <div className="projects-column">
                        {projectsType === "web" ?
                            <>
                                <div className="project-box">web2</div>
                                <div className="project-box">web2</div>
                            </>
                            :
                            <>
                                <div className="project-box">art2</div>
                                <div className="project-box">art2</div>
                            </>
                        }
                    </div>
                }
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
                {/* <span className="nav-ico web" id="web" onClick={changeType}></span>
                <span className="nav-ico art" id="art" onClick={changeType}></span> */}
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