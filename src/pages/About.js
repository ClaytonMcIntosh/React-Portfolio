import React from "react"

function About(props) {
    return (
        <div className="page">
            <div className="about-page">
                <h1 className="page-headings">About</h1>
                <div className="info">
                    <h2 className="main-about-line">Clayton is a creative all-rounder learning the tools of web development. </h2>
                    <img className="clayton-img" src="./assets/img/clayton-mcintosh.jpg" alt="" />
                    <div className="page-text">
                        <p> He started his creative journey as an animator, spent 5 years teaching in Japan, and has been working at Teach Starter creating some of the coolest classroom resources ever to exist.</p>
                        <p> He has a diploma of Screen: Animation, a diploma of Graphic Design, and a degree in Social Science: Development. He is currently completing the Full Stack Coding Boot Camp through the University of Adelaide.
                        </p>
                        <p> Clayton is enthusiastic and always looking for the next creative challenge. He is eager to work on meaningful projects that help people.
                        </p>
                        <p>He lives in Brisbane with his wife and daughter, and they are expecting another addition to the family mid 2022. </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default About;
