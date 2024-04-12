import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPerformance } from "../ServiceAPI/ServiceAPI";

function MyPerformance() {
    const [performancedata, setPerformance] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getUserPerformance(id);
                if (res && res.data && Array.isArray(res.data)) {
                    const formatData = res.data.map((item) => {
                        if (typeof item === 'object' && item !== null && 'kind' in item) {
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
                        } else {
                            console.error("Un élément de performance est mal formé :", item);
                            return null; // ou une autre valeur par défaut
                        }
                    }).filter(item => item !== null); // Filtrer les éléments null
                    setPerformance(formatData);
                } else {
                    console.error("Les données de performance sont incorrectes :", res);
                    // Gérer cette situation d'une manière appropriée, comme afficher un message d'erreur ou mettre en place une valeur par défaut pour les performances.
                }
            } catch (error) {
                console.error(error);
                alert('Erreur lors de la récupération des données de performance');
            }
        };

       getData();
    }, [id]);

    return performancedata;
}

export default MyPerformance;
