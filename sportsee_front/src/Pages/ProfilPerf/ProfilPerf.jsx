import React from 'react';

import MyUser from "../../Hooks/Userdata.jsx";
import Profil from '../../Conmponents/Profil/Profil';


function ProfilPerf() {
    const data = MyUser();

    // Si les données ne sont pas encore chargées, on retourne null
    if (!data) return null;

    return (
        <main className='ProfilPerf'>
            <div className='contaner'>
                {/* Utilisation des informations de l'utilisateur pour afficher le composant Profil */}
                <Profil name={data.userInfos.firstName} />

            </div>
        </main>
    );
}

export default ProfilPerf;

