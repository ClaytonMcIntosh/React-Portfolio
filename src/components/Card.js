import React from 'react'
import BasicModal from "./Modal"

const Card = ({ img, heading, text }) => {
    return (
        <div className='card'>
            <BasicModal img={img} heading={heading} text={text} />
        </div>
    )
}

export default Card


