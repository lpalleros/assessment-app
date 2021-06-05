import React from 'react';
import './StartForm.css';
import {Link} from 'react-router-dom';

const StartForm = () => {
    return (
        <div>
            <h1>Lorem, ipsum dolor sit amet</h1>
            <div>
                <h1>15</h1>
                <h2>Lorem, ipsum</h2>
                <h3>Lorem</h3>
            </div>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste sunt 
            dolores itaque dolore. Iste beatae nulla nam debitis rem sunt tempore, fugit
            </p>
            <Link to="/assessment">
                <button>Start</button>
            </Link>
        </div>
    )
}

export default StartForm;
