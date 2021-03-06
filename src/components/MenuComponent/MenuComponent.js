import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MenuComponent = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const menuVisiblity = () => {
        if (window.innerWidth < 1024) {
            setIsMenuVisible(false);
        } else {
            setIsMenuVisible(true);
        }
    }

    const handleNavItemClick = () => {
        if (window.innerWidth < 1024) {
            setIsMenuVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', menuVisiblity)
        menuVisiblity()
    }, [])

    return (
        <nav className="nav-sidebar hamburger-menu">
            <div className={`menu-background ${isMenuVisible ? "menu-background--active" : "menu-background--inActive"}`} />
            <HamburgerMenuBtn
                isMenuVisible={isMenuVisible}
                setIsMenuVisible={setIsMenuVisible}
            />
            <ul className={`nav-wrapper ${isMenuVisible ? "hamburger-menu--active" : "hamburger-menu--inActive"}`}>
                <NavLink onClick={handleNavItemClick} activeClassName="nav-item--active" exact to="/">
                    <li className="nav-item">
                        <i className="home-ico"></i>
                        <span>HOME</span>
                    </li>
                </NavLink>
                <NavLink onClick={handleNavItemClick} activeClassName="nav-item--active" exact to="/about">
                    <li className="nav-item">
                        <i className="about-ico"></i>
                        <span>ABOUT</span>
                    </li>
                </NavLink>
                <NavLink onClick={handleNavItemClick} activeClassName="nav-item--active" exact to="/portfolio">
                    <li className="nav-item">
                        <i className="portfolio-ico"></i>
                        <span>PORTFOLIO</span>
                    </li>
                </NavLink>
                <NavLink onClick={handleNavItemClick} activeClassName="nav-item--active" exact to="/contact">
                    <li className="nav-item">
                        <i className="contact-ico"></i>
                        <span>CONTACT</span>
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}

const HamburgerMenuBtn = ({ isMenuVisible, setIsMenuVisible }) => {
    return (
        <div className={`hamburger-menu--btn ${isMenuVisible ? "menu--active" : "menu--inActive"}`}
            onClick={() => setIsMenuVisible(!isMenuVisible)}>
            <div className={`hamburger__inner`}></div>
        </div>
    )
}

export default MenuComponent;