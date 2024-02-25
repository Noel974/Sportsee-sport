import axios from 'axios';

/**
 * Fonction asynchrone pour récupérer les informations d'un utilisateur à partir de son ID.
 * @param {number} id - L'identifiant de l'utilisateur à récupérer.
 * @returns {Object} - Les informations de l'utilisateur.
 */
export const getUserProfil = async (id) => {
    try {
        // Effectuer une requête GET vers l'API pour récupérer les informations de l'utilisateur.
        const res = await axios.get(`http://localhost:3000/user/${id}`);

        // Afficher un message dans la console lorsque les données de l'utilisateur sont récupérées avec succès.
        console.log('Données utilisateur récupérées avec succès :', res.data);

        // Retourner les données de l'utilisateur si la requête est réussie.
        return res.data;
    } catch (error) {
        // Gérer les erreurs en cas d'échec de la requête.
        console.error('Erreur lors de la récupération des informations utilisateur :', error);
        // Il est souvent préférable de relancer l'erreur pour que la gestion des erreurs soit effectuée à un niveau supérieur.
        throw error;
    }
};
