import { useState, useEffect } from 'react'; // Import des hooks useState et useEffect de React
import { useParams } from 'react-router-dom'; // Import du hook useParams de react-router-dom
import { getUserAverageSessions } from "../ServiceAPI/ServiceAPI";


function MyAverageSessions() {
    // Utilisation du hook useState pour définir l'état local data et la fonction setData permettant de le modifier
    const [data, setData] = useState([]);
    // Utilisation du hook useParams pour obtenir les paramètres de l'URL, ici l'ID
    const { id } = useParams();

    // Utilisation du hook useEffect pour effectuer une action après le rendu initial et à chaque mise à jour de l'ID
    useEffect(() => {
        // Définition d'une fonction asynchrone fetchData pour récupérer les données des sessions moyennes de l'utilisateur
        const fetchData = async () => {
            try {
                // Appel à la fonction getUserAverageSessions pour obtenir les données
                const request = await getUserAverageSessions(id);
                // Vérification si la requête a réussi
                if (request) {
                    // Mise en forme des données récupérées pour transformer les jours en abréviations
                    const formatData = request.data.sessions.map((data) => {
                        switch (data.day) {
                            case 1:
                                return { ...data, day: 'L' };
                            case 2:
                                return { ...data, day: 'M' };
                            case 3:
                                return { ...data, day: 'M' };
                            case 4:
                                return { ...data, day: 'J' };
                            case 5:
                                return { ...data, day: 'V' };
                            case 6:
                                return { ...data, day: 'S' };
                            case 7:
                                return { ...data, day: 'D' };
                            default:
                                return { ...data };
                        }
                    });
                    // Mise à jour de l'état local avec les données formatées
                    setData(formatData);
                } else {
                    // Affichage d'une alerte en cas d'erreur de données
                    alert('data error');
                }
            } catch (error) {
                // Affichage d'une erreur dans la console en cas d'erreur lors de la récupération des données
                console.error('Error fetching data:', error);
            }
        };
        // Appel de la fonction fetchData à chaque changement de l'ID
        fetchData();
    }, [id]); // Dépendance : l'effet est relancé lorsque l'ID change

    // Retourne les données formatées
    return data;
};
// Export du hook personnalisé 
export default MyAverageSessions