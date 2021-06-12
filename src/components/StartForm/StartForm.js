import React from 'react';
import './StartForm.css';
import {Link} from 'react-router-dom';

const StartForm = () => {
    return (
        <>
            <div className="contenedor">
                <div className="lado-izquierdo">
                    <h1>15</h1>
                    <div>
                        <h2>Lorem</h2>
                        <h3>Lorem, ipsum</h3>
                    </div>
                </div>
                <div className="lado-derecho">
                    <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste sunt 
                    dolores itaque dolore. Iste beatae nulla nam debitis rem sunt tempore, fugit
                    </h3>
                    <Link to="/assessment">
                        <button className="btn-start">Start</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default StartForm;
