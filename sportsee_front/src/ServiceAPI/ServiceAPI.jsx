import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);
/**
 * Fonction asynchrone pour récupérer les informations d'un utilisateur à partir de son ID.
 * @param {number} id - L'identifiant de l'utilisateur à récupérer.
 * @returns {Object} - Les informations de l'utilisateur.
 */
export const getUserInfos = async (id) => {
    try {
        // Effectuer une requête GET vers l'API pour récupérer les informations de l'utilisateur.
        const res = await axios.get(API_URL+`/user/${id}`);


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
/**
 * Obtenir l'activité de l'utilisateur.
 *
 * @param {string} id - Identifiant de l'utilisateur.
 * @returns {object} - Réponse de l'API contenant les données de l'activité de l'utilisateur.
 */
export const getUserActivity = async (id) => {
    try {
        const res = await axios.get(API_URL+`/user/${id}/activity`);
        console.log('Activité de l\'utilisateur récupérée avec succès :', res.data);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'activité de l\'utilisateur :', error);
        throw error;
    }
};

/**
 * Obtenir la session moyenne de l'utilisateur.
 *
 * @param {string} id - Identifiant de l'utilisateur.
 * @returns {object} - Réponse de l'API contenant les données de la session moyenne de l'utilisateur.
 */
export const getUserAverageSessions = async (id) => {
    try {
        const res = await axios.get(API_URL+`/user/${id}/average-sessions`);
        console.log('Session moyenne de l\'utilisateur récupérée avec succès :', res.data);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la session moyenne de l\'utilisateur :', error);
        throw error;
    }
};

/**
 * Obtenir les performances de l'utilisateur.
 *
 * @param {string} id - Identifiant de l'utilisateur.
 * @returns {object} - Réponse de l'API contenant les données de performance de l'utilisateur.
 */
export const getUserPerformance = async (id) => {
    try {
        const res = await axios.get(API_URL+`/user/${id}/performance`);
        console.log('Performances de l\'utilisateur récupérées avec succès :', res.data);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des performances de l\'utilisateur :', error);
        throw error;
    }
};