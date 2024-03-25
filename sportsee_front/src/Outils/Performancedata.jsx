import { useState, useEffect } from 'react'; // Import des hooks useState et useEffect de React
import { useParams } from 'react-router-dom'; // Import du hook useParams de react-router-dom
import { getUserPerformance } from "../ServiceAPI/ServiceAPI";
function MyPerformance() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserPerformance(id);
                if (!response) {
                    throw new Error('Erreur lors de la récupération des données de performance');
                }
                const formatData = response.data.data.map((item) => {
                    switch (item.kind) {
                        case 1:
                            return { ...item, kind: 'Cardio' };
                        case 2:
                            return { ...item, kind: 'Energie' };
                        case 3:
                            return { ...item, kind: 'Endurance' };
                        case 4:
                            return { ...item, kind: 'Force' };
                        case 5:
                            return { ...item, kind: 'Vitesse' };
                        case 6:
                            return { ...item, kind: 'Intensité' };
                        default:
                            return { ...item };
                    }
                });
                setData(formatData);
            } catch (error) {
                console.error(error);
                alert('Erreur lors de la récupération des données de performance');
            }
        };

        fetchData();
    }, [id]);
    // Retourne les données formatées
    return data;
}
export default MyPerformance;
