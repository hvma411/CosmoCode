import { faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialMediaBar = () => {

    const getCopyrightText = () => new Date().getFullYear();

    return (
        <footer className="social-media-bar">
            <h3>DESIGNED & DEVELOPED WITH LOVE TO MINIMALISM AND SPACE | &#169; {getCopyrightText()} COSMOCODE</h3>
            <ul className="social-media">
                <li className="social-media--icon">
                    <a href="https://www.linkedin.com/in/kamil-nosek/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className="social-media--icon">
                    <a href="https://github.com/hvma411" target="_blank">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                </li>
                <li className="social-media--icon">
                    <a href="https://www.instagram.com/hvma411/" target="_blank">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default SocialMediaBar;