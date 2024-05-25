import { useState, useEffect } from 'react';
import { getUserInfos } from "../ServiceAPI/ServiceAPI";
import { useParams, useNavigate } from "react-router-dom"; 

function MyUser() {
    const [userData, setUserData] = useState(null); 
    const { id } = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await getUserInfos(id);
                setUserData(userResponse); // Stockage de la réponse de l'API
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
                alert('Erreur lors de la récupération des données utilisateur');
                navigate('/Error'); 
            }
        };

        fetchData();
    }, [id, navigate]); 
    
    return userData; // Retourner les données de l'utilisateur
}

export default MyUser;
