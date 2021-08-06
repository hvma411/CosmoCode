import React, { useState } from "react";

const ContactFormComponent = () => {

    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e) => {
        e.persist()
        setContactForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault()

        const result = fetch('https://cosmo-code-backend.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(contactForm)
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
    }

    return (
        <form className="contact-form">
            <div className="input-group">
                <input type="text" name="name" id="name" onChange={handleInputChange} value={contactForm.name} placeholder="What is your name?" />
                <label htmlFor="name" className="form-label">What is your name?</label>
            </div>
            <div className="input-group">
                <input type="email" name="email" id="email" onChange={handleInputChange} value={contactForm.email} placeholder="What is your e-mail address?" />
                <label htmlFor="email" className="form-label">What is your e-mail address?</label>
            </div>
            <div className="input-group">
                <textarea name="message" id="message" onChange={handleInputChange} value={contactForm.message} placeholder="Feel free to ask me anything" />
                <label htmlFor="message" className="form-label">Feel free to ask me anything</label>
            </div>
            <div className="privacy-policy--wrapper">
                <span className="info">By clicking "Send Message" you agree with <a href="http://google.pl/">Privacy Policy</a>.</span>
            </div>
            <button className="submit-btn" onClick={sendEmail}>Send message</button>
        </form>
    )
}

export default ContactFormComponent;