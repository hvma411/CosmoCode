import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AboutComponent = () => {

    const [aboutTab, setAboutTab] = useState({
        history: true,
        hobbies: false,
        experience: false,
    });

    const [contentOut, setContentOut] = useState(false);

    return (
        <div className="about-component router-transition">
            <div className="list-wrapper">
                <ul className="about-list">
                    <li className={`about-list--element ${aboutTab.history ? "element--active" : null} `}
                        onClick={ () => setAboutTab(prevState => ({
                            history: true,
                            hobbies: false,
                            experience: false,
                        }))}
                    >
                        <h2>MY HISTORY</h2>
                        <h3>Who am I? How it started?</h3>
                    </li>
                    <li className={`about-list--element ${aboutTab.hobbies ? "element--active" : null} `}
                        onClick={ () => setAboutTab(prevState => ({
                            history: false,
                            hobbies: true,
                            experience: false,
                        }))}
                    >
                        <h2>HOBBIES & DREAMS</h2>
                        <h3>What I like? Who would I like to be?</h3>
                    </li>
                    <li className={`about-list--element ${aboutTab.experience ? "element--active" : null} `}
                        onClick={ () => setAboutTab(prevState => ({
                            history: false,
                            hobbies: false,
                            experience: true,
                        }))}
                    >
                        <h2>EXPERIENCE & SKILLS</h2>
                        <h3>What I like? Who would I like to be?</h3>
                    </li>
                </ul>
            </div>
            <div className="photo-wrapper">
                <div className="photo"></div>
            </div>
            <div className="list-content-wrapper">
                <div className="content-wrapper">
                        { aboutTab.history ? <AboutContent contentTab="history" contentOut={ contentOut } /> : null }
                        { aboutTab.hobbies ? <AboutContent contentTab="hobbies" /> : null }
                        { aboutTab.experience ? <AboutContent contentTab="experience" /> : null }

                </div>
            </div>
        </div>
    )
}

const AboutContent = ({ contentTab }) => {

    if (contentTab === "history") {
        return (
            <div className="content">
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
            <div className="content">
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
            <div className="content">
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