import React from "react"

function Contact(props) {
    return (
        <div className="page">
            <h1>Contact</h1>
            <p className="info">Fill in the form below to send Clayton a message:</p>
            <form className="contact-form">
                <label >Name:</label><br />
                <input type="text" id="name" name="name" /> <br />
                <label for="message">Last name:</label> <br />
                <textarea name="message" rows="10" cols="30" /> <br />
                <input type="submit" value="Submit" /> <br />
            </form>
        </div>
    )
}

export default Contact;
