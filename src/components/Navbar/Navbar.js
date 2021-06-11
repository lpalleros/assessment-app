import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <Link to="/" className="link">Start</Link>
                    <Link to="/assessment" className="link">Assessment</Link>
                    <Link to="/dashboard" className="link">Dashboard</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
