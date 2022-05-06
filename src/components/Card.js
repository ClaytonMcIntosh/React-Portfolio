import React from 'react'

const Card = ({ id, img, heading, text }) => {
    return (
            <div className='card'>
                <img className="small-img" src={img} alt="" />
                {/* <h1> {heading} </h1>
                <p> {text} </p> */}
            </div>
    )
}

export default Card
