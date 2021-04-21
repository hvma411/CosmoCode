import React from "react";
import { NavLink } from "react-router-dom";

const AboutComponent = () => {
    return (
        <div className="about-component router-transition">
            <div className="list-wrapper">
                <ul className="about-list">
                    <li className="about-list--element">
                        <h2>MY HISTORY</h2>
                        <h3>Who am I? How it started?</h3>
                    </li>
                    <li className="about-list--element">
                        <h2>HOBBIES AND DREAMS</h2>
                        <h3>What I like? Who would I like to be?</h3>
                    </li>
                </ul>
            </div>
            <div className="photo-wrapper">
                <div className="photo"></div>
            </div>
        </div>
    )
}

export default AboutComponent;