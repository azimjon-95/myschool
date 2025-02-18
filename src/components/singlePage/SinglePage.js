import React from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';

const SinglePage = () => {
    const location = useLocation();

    return (
        <div >
            <h1>SinglePage</h1>
            <p> {location.state.meData.nomi} </p>
            <p> {location.state.meData.narxi} </p>
            <p> {location.state.meData.kategoriya} </p>
            <p> {location.state.meData.mavjudligi} </p>
            <p> {location.state.meData.reyting} </p>
            <p> {location.state.meData.brend} </p>

        </div>
    )
}

export default SinglePage;
