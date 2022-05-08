import React from "react"

function Contact(props) {
    return (
        <div className="page">
            <div className="contact-page">
                <h1 className="page-headings">Contact</h1>
                <form className="contact-form">
                    <h3>Fill in the form below to send Clayton a message:</h3>
                    <label className="form-el" for="name" >Enter your name:</label><br />
                    <input className="form-el" type="text" id="name" required placeholder="Field required" size="40" /> <br />
                    <label className="form-el" for="email">Enter your email:</label> <br />
                    <input className="form-el" type="email" id="email" pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' size="40" required placeholder="Valid email format required" /> <br />
                    <label className="form-el" for="message">Write a message:</label> <br />
                    <textarea className="form-el" name="message" rows="10" cols="35" required placeholder="Field required" /> <br />
                    <input type="submit" value="Submit" /> <br />
                </form>
            </div>
        </div >
    )
}

export default Contact;
