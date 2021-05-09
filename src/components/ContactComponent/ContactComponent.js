import React from "react";
import ContactBackgroundComponent from "./ContactBackgroundComponent/ContactBackgroundComponent";
import ContactFormComponent from "./ContactFormComponent/ContactFormComponent";

const ContactComponent = () => {
    return (
        <div className="contact-component">
            <div className="contact-info-wrapper content-wrapper">
                <div className="contact-details-box">
                    <h2>Are you interested in to work with me?</h2>
                    <h2>Let's talk about your idea and make it real</h2>
                </div>
            </div>
            <div className="solar-system-wrapper">
                <ContactBackgroundComponent />
            </div>
            <div className="contact-form-wrapper content-wrapper">
                <ContactFormComponent />
            </div>
        </div>
    )
}

export default ContactComponent;