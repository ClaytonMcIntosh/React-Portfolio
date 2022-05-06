import React from "react"

function Contact(props) {
    return (
        <div className="page">
            <div className="contact-page">
                <h1 className="page-headings">Contact</h1>
                <form className="contact-form">
                <p>Fill in the form below to send Clayton a message:</p>
                    <label >Name:</label><br />
                    <input type="text" id="name" name="name" /> <br />
                    <label for="message">Last name:</label> <br />
                    <textarea name="message" rows="10" cols="30" /> <br />
                    <input type="submit" value="Submit" /> <br />
                </form>
            </div>
        </div>
    )
}

export default Contact;
