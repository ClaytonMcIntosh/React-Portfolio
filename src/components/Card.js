import React from 'react'

const Card = () => {
    return (
        <div className='cards-container'>
            <div className='cards'>
                <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
                <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
                <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
            </div>
            <button>Show more</button>
            <div className="extra-cards">
                <div className='cards'>
                    <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
                    <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
                    <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
                </div>
                <div className='cards'>
                    <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
                    <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
                    <img src="/assets/img/Placeholder-300px.jpeg" alt="placeholder" width="30%" />
                </div>
            </div>
        </div>
    )
}

export default Card
