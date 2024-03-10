import React from 'react';

import MyUser from "../../Hooks/Userdata.jsx";
import Profil from '../../Conmponents/Profil/Profil';
import Activity from '../../Conmponents/Profil/Activity.jsx';
import ScoreProfil from '../../Conmponents/Profil/Score.jsx';
import AverageSsession from '../../Conmponents/Profil/AverageSessions.jsx';
import Performance from '../../Conmponents/Profil/Performance.jsx';


function ProfilPerf() {
    const data = MyUser();

    // Si les données ne sont pas encore chargées, on retourne null
    if (!data) return null;

    return (
        <main className='ProfilPerf'>
            <div className='contaner'>
                {/* Utilisation des informations de l'utilisateur pour afficher le composant Profil */}
                <Profil name={data.userInfos.firstName} />
                <div className='contenu'>
                    {/* Utilisation des informations de l'utilisateur pour afficher le composant Activity */}
                    <Activity data={data.activityData} />
                    <div className='contenu-chart'>
                        {/* Utilisation des informations de l'utilisateur pour afficher le composant AverageSsession */}
                        <AverageSsession />
                        {/* Utilisation des informations de l'utilisateur pour afficher le composant Performance */}
                        <Performance />
                        {/* Utilisation des informations de l'utilisateur pour afficher le composant ScoreProfil */}
                        <ScoreProfil data={data} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProfilPerf;

