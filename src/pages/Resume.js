import React from "react"

function Resume(props) {
    return (
        <div className="page">
            <div className="about-page">
                <h1 className="page-headings">Resume</h1>
                <div className="info">
                    <h2 className="main-about-line">Download Clayton's resume </h2>
                    <div className="page-text">
                        <a href="./assets/pdfs/Clayton McIntosh - Resume.pdf" alt=""><p className="resume-link-button"> Click to view Clayton's professional resume.</p></a> <br />
                        <a href="./assets/pdfs/Portfolio - Clayton McIntosh.pdf" alt=""><p className="resume-link-button">Click to view Clayton's creative portfolio. </p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
