import { useState, useEffect } from 'react';
import { getUserInfos } from "../ServiceAPI/ServiceAPI";
import { useParams, useNavigate } from "react-router-dom"; // Ajoutez useNavigate

function MyUser() {
    const [userData, setUserData] = useState(null); // Utilisation de null comme état initial
    const { id } = useParams();
    const navigate = useNavigate(); // Ajoutez cette ligne

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await getUserInfos(id);
                setUserData(userResponse); // Stockage de la réponse de l'API
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
                alert('Erreur lors de la récupération des données utilisateur');
                navigate('/Error'); // Ajoutez cette ligne
            }
        };

        fetchData();
    }, [id, navigate]); // Ajoutez navigate ici
    
    return userData; // Retourner les données de l'utilisateur
}

export default MyUser;
