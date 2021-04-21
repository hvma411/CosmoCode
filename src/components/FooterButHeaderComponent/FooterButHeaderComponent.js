import { faFacebookSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterButHeaderComponent = () => {
    return (
        <footer className="footer-but-header">
            {/* <h3>DESIGNED WITH LOVE TO MINIMALISM AND SPACE</h3> */}
            <ul className="social-media">
                <li className="social-media--icon">
                    <a href="https://www.facebook.com/">
                        <FontAwesomeIcon icon={ faFacebookSquare } />
                    </a>
                </li>
                <li className="social-media--icon">
                    <a href="https://www.linkedin.com/">
                        <FontAwesomeIcon icon={ faLinkedin } />
                    </a>
                </li>
                <li className="social-media--icon">
                    <a href="https://www.instagram.com/">
                        <FontAwesomeIcon icon={ faInstagramSquare } />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default FooterButHeaderComponent;