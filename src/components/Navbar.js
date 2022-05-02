import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1> Clayton McIntosh </h1>
            <Link to="/About">About </Link>
            <Link to="/Portfolio">Portfolio </Link>
            <Link to="/Contact">Contact </Link>
            <Link to="/Resume">Resume </Link>

        </div>
    )
}

export default Navbar
