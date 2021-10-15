import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactFormComponent = () => {

    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isContactFormFieldFilledCorrectly, setIsContactFormFieldFilledCorrectly] = useState({
        name: true,
        email: true,
        message: true
    })

    const [isLoadingCircleVisible, setIsLoadingCircleVisible] = useState(false);

    const [hasMessageBeenSent, setHasMessageBeenSent] = useState(false);

    const [messageSendingFailed, setMessageSendingFailed] = useState(false);

    const cleanContactForm = () => {
        setContactForm({
            name: "",
            email: "",
            message: ""
        })
    }

    const handleInputChange = (e) => {
        e.persist()
        setContactForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const validation = {
        name: RegExp(/([^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u02B0-\u036F\u00D7\u00F7\u2000-\u2BFF]{2,})+/),
        email: RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        message: RegExp(/.{10,}/)
    }

    const validateForm = () => {
        Object.keys(contactForm).map((e, idx) => {
            setIsContactFormFieldFilledCorrectly(prevState => ({
                ...prevState,
                [e]: validation[e].test(contactForm[e])
            }))
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        validateForm()
    }

    const sendEmail = () => {
        setIsLoadingCircleVisible(true);
        fetch('https://cosmo-code-backend.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(contactForm)
        })
            .then(() => {
                cleanContactForm();
                setIsLoadingCircleVisible(false);
                setHasMessageBeenSent(true);
            })
            .then(() => {
                setTimeout(() => {
                    setHasMessageBeenSent(false);
                }, 2000)
            })
            .catch(() => {
                setMessageSendingFailed(true);
                setIsLoadingCircleVisible(false);
            })

    }

    useEffect(() => {
        const { name, email, message } = isContactFormFieldFilledCorrectly;
        if (name && email && message && contactForm.name && contactForm.email && contactForm.message) {
            sendEmail()
        }
    }, [isContactFormFieldFilledCorrectly])

    return (
        <form className="contact-form">
            <span className={`message-send-info ${hasMessageBeenSent ? "active" : ""}`}>Thank you for your message.<br /> I'll respond as soon as possible.</span>
            <span className={`message-send-info ${messageSendingFailed ? "active" : ""}`}>Something went wrong :( <br /> Try again later! </span>
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
                {isLoadingCircleVisible ? <div className="loading-circle"></div> : ""}

            </div>
            <div className="privacy-policy--wrapper">
                <span className="info">By clicking "Send Message" you agree with <Link to="/privacypolicy">Privacy Policy</Link> </span>
            </div>
            <button className="submit-btn" onClick={handleFormSubmit}>Send message</button>
            <div className="form-errors-box">
                {isContactFormFieldFilledCorrectly.name ? "" : <span className="form-error">I'd like to know your name. (only letters)</span>}
                {isContactFormFieldFilledCorrectly.email ? "" : <span className="form-error">I need your correct email to respond.</span>}
                {isContactFormFieldFilledCorrectly.message ? "" : <span className="form-error">Tell me something more, please. (min. 10 characters)</span>}
            </div>
        </form>
    )
}

export default ContactFormComponent;