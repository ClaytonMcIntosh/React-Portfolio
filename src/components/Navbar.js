import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='main-nav'>
            <h1> Clayton McIntosh </h1>
            <Link to="/About">About </Link>
            <Link to="/Portfolio">Portfolio </Link>
            <Link to="/Contact">Contact </Link>
            <Link to="/Resume">Resume </Link>
        </nav>
    )
}

export default Navbar
