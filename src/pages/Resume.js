import React from "react"
var resume = require("../assets/pdfs/Clayton McIntosh - Resume.pdf")
var portfolio = require("../assets/pdfs/Portfolio - Clayton McIntosh.pdf")

function Resume(props) {
    return (
        <div className="page">
            <div className="about-page">
                <h1 className="page-headings">Resume</h1>
                <div className="info">
                    <h2 className="main-about-line">Download Clayton's resume </h2>
                    <div className="page-text">
                        <a href={resume} alt=""><p className="resume-link-button"> Click to view Clayton's professional resume.</p></a> <br />
                        <a href={portfolio} alt=""><p className="resume-link-button">Click to view Clayton's creative portfolio. </p></a>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default Resume;
