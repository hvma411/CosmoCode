import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
                        <h3>What I like? Who would I like to be?</h3>
                    </li>
                    <li className={`about-list--element ${aboutTab.experience.visible ? "element--active" : ""}`}
                        onClick={changeContent}
                        data-content="experience"
                    >
                        <h2>EXPERIENCE & SKILLS</h2>
                        <h3>Story of my experience and skills</h3>
                    </li>
                </ul>
            </div>
            { width < 760 ? null : <Photo />}
            <div className="list-content-wrapper">
                <div className="content-wrapper">
                    <AboutContent contentTab="history" animation={aboutTab.history.animation} />
                    <AboutContent contentTab="hobbies" animation={aboutTab.hobbies.animation} />
                    <AboutContent contentTab="experience" animation={aboutTab.experience.animation} />
                </div>
            </div>
            { width < 760 ? <Photo /> : null}
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

    if (contentTab === "history") {
        return (
            <div className={`content content--${animation}`}>
                <h2>MY HISTORY</h2>
                <h3>Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.
                Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.
                Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.
                </h3>
                <h3>Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.</h3>
            </div>
        )
    }

    if (contentTab === "hobbies") {
        return (
            <div className={`content content--${animation}`}>
                <h2>HOBBIES & DREAMS</h2>
                <h3>Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.
                Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.
                </h3>
                <h3>Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.</h3>
                <h3>Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.</h3>
            </div>
        )
    }

    if (contentTab === "experience") {
        return (
            <div className={`content content--${animation}`}>
                <h2>EXPERIENCE & SKILLS</h2>
                <h3>Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.
                Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.
                </h3>
                <h3>Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.</h3>
                <h3>Est dolore voluptate tempor dolor deserunt do eu occaecat tempor sit cupidatat officia nulla aliquip. Nisi tempor ad excepteur id aute quis minim ullamco exercitation enim. Est est ut officia dolore irure.</h3>
            </div>
        )
    }
}

export default AboutComponent;