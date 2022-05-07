import React from "react"

function Contact(props) {
    return (
        <div className="page">
            <div className="contact-page">
                <h1 className="page-headings">Contact</h1>
                <form className="contact-form">
                    <p>Fill in the form below to send Clayton a message:</p>
                    <label >Name:</label><br />
                    <input className="form-el" type="text" id="name" required placeholder="Field required" /> <br />
                    <label className="form-el" for="message">Email:</label> <br />
                    <label for="email">Enter your email:</label>
                    <input type="email" id="email" pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' size="30" required /> <br />
                    <textarea name="message" rows="10" cols="30" required placeholder="Field required" /> <br />
                    <input type="submit" value="Submit" /> <br />
                </form>
            </div>
        </div >
    )
}

export default Contact;
