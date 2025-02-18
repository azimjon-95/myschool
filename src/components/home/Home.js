import React from 'react';
import { shoppingData } from '../../mock/database';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const ratingStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="stars">
                {/* Display the full stars */}
                {[...Array(fullStars)].map((_, i) => <IoIosStar key={`full-${i}`} />)}
                {/* Display the half star if the rating has a half star */}
                {halfStar && <IoIosStarHalf key="half" />}
                {/* Display the empty stars */}
                {[...Array(emptyStars)].map((_, i) => <IoIosStarOutline key={`empty-${i}`} />)}
            </div>
        );
    };
    const navigate = useNavigate();
    return (
        <div className='container'>
            {/* Render the list of items */}
            <h1 onClick={() => navigate(+1)}>Oldinga</h1>
            {
                shoppingData.map((value, index) => (
                    <Link
                        to={`/product/single/page`}
                        state={{ meData: value }}
                        key={index}
                        className={value.mavjudligi ? "myCard" : "noActive"}
                    >
                        {/* Display the name, price, category, brand, and rating of the item */}
                        <h3>{value.nomi}</h3>
                        <div className="card-items">
                            <p><strong>Narxi:</strong> ${value.narxi}</p>
                        </div>
                        <div className="card-items">
                            <p><strong>Kategoriya:</strong> {value.kategoriya}</p>
                        </div>
                        <div className="card-items">
                            <p><strong>Brend:</strong> {value.brend}</p>
                        </div>
                        <div className="card-items">
                            <p><strong>Reyting:</strong></p>
                            {/* Display the rating of the item */}
                            {ratingStars(value.reyting)}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
/******  4e789440-b06f-4383-98bb-bdae98fbf1c5  *******/

export default Home;
