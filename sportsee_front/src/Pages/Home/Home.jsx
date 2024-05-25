import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getUserInfos } from '../../ServiceAPI/ServiceAPI';

function HomePage() {
    const navigate = useNavigate();
    
    const id1 = 12;
    const id2 = 18;
    console.log(id1, id2);
    const [user1, setUser1] = useState(null);
    const [user2, setUser2] = useState(null);

    useEffect(() => {
        const fetchUserInfos = async () => {
            try {
                const userInfo1 = await getUserInfos(id1);
                const userInfo2 = await getUserInfos(id2);
                setUser1(userInfo1);
                setUser2(userInfo2);
            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des informations de l'utilisateur :", error);
                navigate('/error'); // Naviguer vers une page d'erreur
            }
        };
        fetchUserInfos();
    }, [id1, id2, navigate]); // Ajouter navigate comme dépendance
    return (
        <main className="main">
            <h2 className="title"> Les USER</h2>
            <div className="card">
                <NavLink to={`user/${id1}`}>{user1 ? `${user1.lastName} ${user1.firstName}` : id1}</NavLink>
            </div>
            <div className="card">
                <NavLink to={`user/${id2}`}>{user2 ? `${user2.lastName} ${user2.firstName}` : id2}</NavLink>
            </div>
        </main>
    );
}

export default HomePage;
