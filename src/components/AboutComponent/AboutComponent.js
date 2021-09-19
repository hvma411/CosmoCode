import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ScrollMeComponent } from "./ScrollMeComponent";

const AboutComponent = () => {

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

    const [aboutTab, setAboutTab] = useState({
        history: {
            visible: true,
            animation: "active"
        },
        hobbies: {
            visible: false,
            animation: "inActive"
        },
        experience: {
            visible: false,
            animation: "inActive"
        }
    });

    const changeContent = (e) => {
        const target = e.currentTarget.dataset.content;

        if (target === "history") {
            setAboutTab({
                history: {
                    visible: true,
                    animation: "active"
                },
                hobbies: {
                    visible: false,
                    animation: "inActive"
                },
                experience: {
                    visible: false,
                    animation: "inActive"
                }
            })
        }
        if (target === "hobbies") {
            setAboutTab({
                history: {
                    visible: false,
                    animation: "inActive"
                },
                hobbies: {
                    visible: true,
                    animation: "active"
                },
                experience: {
                    visible: false,
                    animation: "inActive"
                }
            })
        }
        if (target === "experience") {
            setAboutTab({
                history: {
                    visible: false,
                    animation: "inActive"
                },
                hobbies: {
                    visible: false,
                    animation: "inActive"
                },
                experience: {
                    visible: true,
                    animation: "active"
                }
            })
        }
    }

    return (
        <div className="about-component router-transition">
            <div className="list-wrapper">
                <ul className="about-list">
                    <li className={`about-list--element ${aboutTab.history.visible ? "element--active" : ""}`}
                        onClick={changeContent}
                        data-content="history"
                    >
                        <h2>MY HISTORY</h2>
                        <h3>Who am I? How it started?</h3>
                    </li>
                    <li className={`about-list--element ${aboutTab.hobbies.visible ? "element--active" : ""}`}
                        onClick={changeContent}
                        data-content="hobbies"
                    >
                        <h2>HOBBIES & DREAMS</h2>
                        <h3>What I like? My dream future?</h3>
                    </li>
                    <li className={`about-list--element ${aboutTab.experience.visible ? "element--active" : ""}`}
                        onClick={changeContent}
                        data-content="experience"
                    >
                        <h2>TECH STACK & EXPERIENCE</h2>
                        <h3>What is my experience and tech-stack? </h3>
                    </li>
                </ul>
            </div>
            { width < 1024 ? null : <Photo />}
            <div className="list-content-wrapper">
                <div className="content-wrapper">
                    <AboutContent contentTab="history" animation={aboutTab.history.animation} />
                    <AboutContent contentTab="hobbies" animation={aboutTab.hobbies.animation} />
                    <AboutContent contentTab="experience" animation={aboutTab.experience.animation} />
                    <ScrollMeComponent />
                </div>
            </div>
            { width < 1024 ? <Photo /> : null}
        </div>
    )
}

const Photo = () => {
    return (
        <div className="photo-wrapper">
            <div className="photo"></div>
        </div>
    )
}

const AboutContent = ({ contentTab, animation }) => {

    const getMyAge = () => {
        return new Date().getFullYear() - 1997;
    }

    const getFullExperience = () => {
        return new Date().getFullYear() - 2019;
    }

    const getCommercialExperience = () => {
        return new Date().getFullYear() - 2020;
    }

    const getCorrectYearWord = () => {
        if (getCommercialExperience() > 1) {
            return "years"
        } else {
            return "year"
        }
    }

    if (contentTab === "history") {
        return (
            <div className={`content content--${animation}`}>
                <h2>MY HISTORY</h2>
                <h3>
                    Hi, I'm Kamil and I'm {getMyAge()} old full-stack developer and experienced sales & customer service consultant. During my sales man career I took 7th place in the ranking of T-Mobile best sellers.
                    It was a great achievement for me but then I decided to change something in my life and I just started learning programming.
                </h3>
                <h3>
                    It was a hard decision but thought about programming possibilities to bring my ideas and dreams to reality was convincing.
                    I have been learning programming about 2 years, after that I changed my position in company and finally I work as full-stack developer. It was another big step in my life and great achievement also.
                </h3>
            </div>
        )
    }

    if (contentTab === "hobbies") {
        return (
            <div className={`content content--${animation}`}>
                <h2>HOBBIES & DREAMS</h2>
                <h3>
                    I'm fascinated by the future, new and futuristic technologies and exploring universe. My biggests dreams are to live in the times of highly developed technology allowing for complete transfer to virtual reality
                    indistinguishable from the real world, ease and rapid exploration of universe.
                </h3>
                <h3>
                    I want to be a person who will contribute to such a development of humanity - my next big step is to learn more to be part of it.
                </h3>
                <h3>
                    Favourite book:<br /> "Ludzkość Poprawiona" - Grzegorz Lindenberg
                </h3>
                <h3>
                    Favourite movie:<br /> "Interstellar" - Christopher Nolan
                </h3>
            </div>
        )
    }

    if (contentTab === "experience") {
        return (
            <div className={`content content--${animation}`}>
                <h2>TECH STACK & EXPERIENCE</h2>
                <h3>
                    I am currently working as a Junior Full-Stack Developer at T-Mobile since November 2020.
                </h3>
                <h3>
                    I have about {getFullExperience()} years of non-commercial and {getCommercialExperience()} {getCorrectYearWord()} of commercial programming experience. You can find a few of my dev and art projects by clicking "portfolio" in menu. To see more projects go to my github account by clicking icon in top, right corner.
                </h3>
                <div className="tech-stack-wrapper">
                    <h3>
                        Front-End: <br />
                        <ul className="tech-stack-list">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>HTML5</li>
                            <li>CSS3 (Sass)</li>
                            <li>Redux</li>
                            <li>Angular basics</li>
                        </ul>
                    </h3>
                    <h3>
                        Back-End: <br />
                        <ul className="tech-stack-list">
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>Maven</li>
                            <li>Firebase</li>
                            <li>SQL</li>
                            <li>Python basics</li>
                        </ul>
                    </h3>
                </div>
            </div>
        )
    }
}

export default AboutComponent;