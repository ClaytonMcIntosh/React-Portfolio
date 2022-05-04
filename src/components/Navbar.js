import React from 'react'
import Mainmenu from './Mainmenu';



const Navbar = () => {
    return (
        <nav className='main-nav'>
            <div className='site-name-container'>
            <h1> Clayton McIntosh </h1>
            </div>
            <Mainmenu />
        </nav>
    )
}

export default Navbar
