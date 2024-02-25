import React, { useState, useEffect } from "react";
import { getUserProfil } from "../../ServiceAPI/ServiceAPI";
import Profil from '../../Conmponents/Profil/Profil';
import { useParams } from "react-router-dom";

function ProfilPerf () {
    const [data, setData] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const userData = await getUserProfil(id); 
                setData(userData); 
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
                alert('Erreur lors de la récupération des données utilisateur');
            }
        };

        getData();
    }, [id]);

    if (!data) return null; 

    return (
        <main>
            <Profil name={data.name}/> 
        </main>
    );
}

export default ProfilPerf;
