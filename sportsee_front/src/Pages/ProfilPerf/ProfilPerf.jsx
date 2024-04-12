import React from 'react';
import { useParams } from 'react-router-dom';

import MyUser from "../../Outils/Userdata.jsx";
import MyActivity from '../../Outils/Activitydata.jsx';
import MyPerformance from "../../Outils/Performancedata.jsx";
import MyAverageSessions from '../../Outils/AverageSessionssata.jsx';

import Profil from '../../Conmponents/Profil/Profil';
import Activity from '../../Conmponents/Profil/Activity.jsx';
import ScoreProfil from '../../Conmponents/Profil/Score.jsx';
import AverageSsession from '../../Conmponents/Profil/AverageSessions.jsx';
import Performance from '../../Conmponents/Profil/Performance.jsx';
import Nutrition from '../../Conmponents/Profil/Besoin.jsx';



function ProfilPerf() {
    const {id} = useParams()
    const userData = MyUser(id);
    const activitydata = MyActivity(id);
    const averagesessiondata = MyAverageSessions(id);    
    const performancedata = MyPerformance(id);

    // Si les données ne sont pas encore chargées, on retourne null
    if (!userData ||!activitydata || !performancedata || !averagesessiondata ) return null;

    return (
<div className='ProfilPerf'>
        <div className='Profil'>
        {/* Utilisation des informations de l'utilisateur pour afficher le composant Profil */}
        <Profil name={userData.firstName} />
        <div className='contenu-besoin'>
                <section>
                    {/* Utilisation des informations de l'utilisateur pour afficher le composant Activity */}
                    <Activity data={activitydata.sessions} />
                    <div className='contenu-chart'>
                        {/* Utilisation des informations de l'utilisateur pour afficher le composant AverageSsession */}
                        <AverageSsession data={averagesessiondata.sessions}  />
                        {/* Utilisation des informations de l'utilisateur pour afficher le composant Performance */}
                        <Performance data={performancedata} />
                        {/* Utilisation des informations de l'utilisateur pour afficher le composant ScoreProfil */}
                        <ScoreProfil data={userData} />
                    </div>
                </section>
                <Nutrition data={userData}/>
            </div>
            </div>
    </div>
    );
}

export default ProfilPerf;
