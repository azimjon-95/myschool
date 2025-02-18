import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/">
                <h1>My Cards</h1>
            </Link>
            <div className="nav-right">
                <Link to="/add-products">
                    <button className="btn">Add Card</button>
                </Link>
                <Link to="/about">
                    <button className="btn">About</button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar
