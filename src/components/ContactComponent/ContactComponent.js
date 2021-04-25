import React from "react";
import ContactBackgroundComponent from "./ContactBackgroundComponent/ContactBackgroundComponent";
import ContactFormComponent from "./ContactFormComponent/ContactFormComponent";

const ContactComponent = () => {
    return (
        <div className="contact-component">
            <ContactBackgroundComponent />
            <div className="contact-info-wrapper content-wrapper"></div>
            <div className="contact-form-wrapper content-wrapper">
                <ContactFormComponent />
            </div>
        </div>
    )
}

export default ContactComponent;