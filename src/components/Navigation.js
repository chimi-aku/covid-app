import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink to="/" exact>
                <button className="button button-5">
                    <div className="translate"></div>
                    <a href>Numbers</a>
                </button>
            </NavLink>
            <NavLink to="/chart">
                <button className="button button-5">
                    <div className="translate"></div>
                    <a href>Chart</a>
                </button>
            </NavLink>
        </nav>
    );
};

export default Navigation;
