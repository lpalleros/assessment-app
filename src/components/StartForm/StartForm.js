import React from 'react';
import './StartForm.css';
import {Link} from 'react-router-dom';

const StartForm = () => {
    return (
        <div className="contenedor">
            <h1 className="texto-cabecera">Lorem, ipsum dolor sit amet</h1>
            <div className="lado-izquierdo">
                <h1>15</h1>
                <h2>Lorem, ipsum</h2>
                <h3>Lorem</h3>
            </div>
            <div className="lado-derecho">
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste sunt 
                dolores itaque dolore. Iste beatae nulla nam debitis rem sunt tempore, fugit
                </p>
                <Link to="/assessment">
                    <button className="btn-start">Start</button>
                </Link>
            </div>
        </div>
    )
}

export default StartForm;
