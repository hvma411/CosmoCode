import React from "react";

const ContactFormComponent = () => {
    return (
        <form className="contact-form">
            <h2 className="contact-form--title">Feel free to text me</h2>
            <div className="input-group">
                <input type="text" name="name" id="name" placeholder="What is your name?" />
                <label htmlFor="name" className="form-label">What is your name?</label>
            </div>
            <div className="input-group">
                <input type="email" name="email" id="email" placeholder="What is your e-mail address?" />
                <label htmlFor="email" className="form-label">What is your e-mail address?</label>
            </div>
            <div className="input-group">
                <textarea name="message" id="message" placeholder="Feel free to ask me anything" />
                <label htmlFor="message" className="form-label">Feel free to ask me anything</label>
            </div>
            <button className="submit-btn">Send message</button>
        </form>
    )
}

export default ContactFormComponent;