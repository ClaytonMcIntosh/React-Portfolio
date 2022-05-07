import React from 'react'

const Card = ({ img, heading, text, websiteAddress }) => {
    return (
        <div className='card'>
            <a href={websiteAddress}>
                <img className="card-image" src={img} alt="" width="100%" />
                <h3>{heading} </h3>
                <p> {text} </p>
            </a>
        </div >
    )
}

export default Card


