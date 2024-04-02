import { useState, useEffect } from 'react';
import {getUserInfos} from "../ServiceAPI/ServiceAPI";
import { useParams } from "react-router-dom";

function MyUser() {
    const [data, setData] = useState(null); // Utilisation de null comme état initial
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getUserInfos(id);
                setData(response.data); // Stockage de la réponse de l'API
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
                alert('Erreur lors de la récupération des données utilisateur');
            }
        };

        getData();
    }, [id]);
    
    return data;
}
export default MyUser;