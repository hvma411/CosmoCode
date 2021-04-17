import React from "react";

const MenuComponent = () => {
    return (
        <nav className="nav-sidebar">
            <ul className="nav-wrapper">
                <li className="nav-item">
                    <i className="home-ico"></i>
                    <span>HOME</span>
                </li>
                <li className="nav-item">
                    <i className="portfolio-ico"></i>
                    <span>PROJECTS</span>
                </li>
                <li className="nav-item">
                    <i className="about-ico"></i>
                    <span>ABOUT</span>
                </li>
                <li className="nav-item">
                    <i className="contact-ico"></i>
                    <span>CONTACT</span>
                </li>
            </ul>
            <div className="nav-sidebar--line"></div>
        </nav>
    )
}

export default MenuComponent;