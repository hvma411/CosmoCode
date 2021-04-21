import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuComponent = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(true);

    return (
        <nav className="nav-sidebar hamburger-menu">
            <HamburgerMenuBtn 
                isMenuVisible={ isMenuVisible } 
                setIsMenuVisible={ setIsMenuVisible }
            />
            <ul className={`nav-wrapper ${ isMenuVisible ? "hamburger-menu--active" : "hamburger-menu--inActive"}`}>
                <NavLink to="/">
                    <li className="nav-item">
                        <i className="home-ico"></i>
                        <span>HOME</span>
                    </li>
                </NavLink>
                <NavLink to="/about">
                    <li className="nav-item">
                        <i className="about-ico"></i>
                        <span>ABOUT</span>
                    </li>
                </NavLink>
                <NavLink to="/portfolio">
                    <li className="nav-item">
                        <i className="portfolio-ico"></i>
                        <span>PORTFOLIO</span>
                    </li>
                </NavLink>
                <NavLink to="/contact">
                    <li className="nav-item">
                        <i className="contact-ico"></i>
                        <span>CONTACT</span>
                    </li>
                </NavLink>
            </ul>
            {/* <div className="nav-sidebar--line"></div> */}
        </nav>
    )
}

const HamburgerMenuBtn = ({ isMenuVisible, setIsMenuVisible }) => {

    return (
        <div className={`hamburger-menu--btn ${ isMenuVisible ? "menu--active" : "menu--inActive"}`}
            onClick={() => setIsMenuVisible(!isMenuVisible)}>
            <div className={`hamburger__inner`}></div>
        </div>
    )
}

export default MenuComponent;