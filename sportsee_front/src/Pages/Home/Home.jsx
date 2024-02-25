import React from 'react';
import { NavLink } from 'react-router-dom';

function HomePage() {
    return ( 
        <main className="main">
            <h2 className="title">USER</h2>
            <NavLink to="user/12">12</NavLink>
            <NavLink to="user/18">18</NavLink>
        </main>
     );
}

export default HomePage;