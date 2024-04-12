import React from 'react';
import { NavLink } from 'react-router-dom';

function HomePage() {

    return (
        <main className="main">
            <h2 className="title"> Les USER</h2>
            <div className="card">
            <NavLink to="user/12">12</NavLink>
            </div>
            <div className="card">
            <NavLink to="user/18">18</NavLink>
            </div>
        </main>
    );
}

export default HomePage;
