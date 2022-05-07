const Footer = () => {
    return (
        <div className="footer">
            <p>Clayton McIntosh 2022</p>

            <div className="contactsbox">
                <div className="contacts">
                    <a href="https://www.linkedin.com/in/clayton-mcintosh/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <h4>Linked In</h4>
                    </a>
                </div>
                <div className="contacts">
                    <a href="https://github.com/ClaytonMcIntosh" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <h4>Git Hub</h4>
                    </a>
                </div>
                <div className="contacts">
                    <a href="https://www.instagram.com/domesticcowboy/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <i className="fab fa-instagram-square"></i>
                        </div>
                        <h4>Instagram</h4>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Footer
