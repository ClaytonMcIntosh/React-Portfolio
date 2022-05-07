import React from 'react'

const Card = ({ img, heading, text, websiteAddress, git }) => {
    return (
        <div className='card'>
            <a href={websiteAddress}>
                <img className="card-image" src={img} alt="" width="100%" />
                <h3>{heading} </h3>
            </a>
            <p> {text} </p>
            <br />
            <a href={websiteAddress} alt=""><p className='link-button'>Website</p></a>
            <a href={git} alt=""><p className='link-button'>Git Repo</p></a>
        </div >
    )
}

export default Card


