import React from 'react'
import { Link } from 'react-router-dom';
import Menuitem from './Menuitem';

const Navbar = () => {
    return (
        <nav className='main-nav'>
            <h1> Clayton McIntosh </h1>
            <Link to="/About"> <Menuitem text='About' /> </Link>
            <Link to="/Portfolio"> <Menuitem text='Portfolio' /></Link>
            <Link to="/Contact"> <Menuitem text='Contact' /> </Link>
            <Link to="/Resume"> <Menuitem text='Resume' /> </Link>

        </nav>
    )
}

export default Navbar
