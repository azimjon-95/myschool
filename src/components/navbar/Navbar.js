import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <Link to="/">
                <h1>My Cards</h1>
            </Link>
            {/* Render the list of items */}
            <h1 onClick={() => navigate(-1)}>Orqaga</h1>
            |
            <h1 onClick={() => navigate(+1)}>Oldinga</h1>
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
