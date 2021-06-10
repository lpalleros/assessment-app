import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header className="header">
            <section className="header-content">
                <nav className="menu">
                    <Link to="/">
                        <button>Start</button>
                    </Link>
                    <Link to="/assessment">
                        <button>Assessment</button>
                    </Link>
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                </nav>
            </section>
        </header>
    )
}

export default Navbar
