import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from '../Assets/Data/SportseeApi';

/**
 * Classe simulant Axios pour les besoins de test.
 */
class MockAPI {
    /**
     * Méthode pour simuler une requête GET.
     * @param {string} url - L'URL de la requête.
     * @returns {Promise<{data: any}>} - Une promesse résolue avec les données de la réponse.
     * @throws {Error} - Une erreur si l'URL n'est pas prise en charge ou si les données ne sont pas trouvées.
     */
    static async get(url) {
        console.log('Appel à la méthode MockAPI.get avec l\'URL :', url);
        if (url.includes('/user/')) {
            return this.getUserInfos(url); // Appel à la méthode getUserInfos
        } else if (url.includes('/activity')) {
            return this.getUserActivity(url); // Appel à la méthode getUserActivity
        } else if (url.includes('/average-sessions')) {
            return this.getUserAverageSessions(url); // Appel à la méthode getUserAverageSessions
        } else if (url.includes('/performance')) {
            return this.getUserPerformance(url); // Appel à la méthode getUserPerformance
        } else {
            throw new Error('URL non prise en charge');
        }
    }

    /**
     * Méthode pour récupérer les informations de l'utilisateur.
     * @param {string} url - L'URL de la requête.
     * @returns {Promise<{data: any}>} - Une promesse résolue avec les informations de l'utilisateur.
     * @throws {Error} - Une erreur si l'utilisateur n'est pas trouvé.
     */
    static async getUserInfos(url) {
        const userId = parseInt(url.split('/user/')[1]);
        const user = USER_MAIN_DATA.find(user => user.id === userId);
        if (user) {
            return { data: user.userInfos };
        } else {
            throw new Error('Utilisateur non trouvé');
        }
    }

    /**
     * Méthode pour récupérer l'activité de l'utilisateur.
     * @param {string} url - L'URL de la requête.
     * @returns {Promise<{data: any}>} - Une promesse résolue avec l'activité de l'utilisateur.
     * @throws {Error} - Une erreur si l'activité de l'utilisateur n'est pas trouvée.
     */
    static async getUserActivity(url) {
        const userId = parseInt(url.split('/user/')[1]);
        const userActivity = USER_ACTIVITY.find(activity => activity.userId === userId);
        if (userActivity) {
            return { data: userActivity.sessions };
        } else {
            throw new Error('Activité utilisateur non trouvée');
        }
    }

    /**
     * Méthode pour récupérer la session moyenne de l'utilisateur.
     * @param {string} url - L'URL de la requête.
     * @returns {Promise<{data: any}>} - Une promesse résolue avec la session moyenne de l'utilisateur.
     * @throws {Error} - Une erreur si la session moyenne de l'utilisateur n'est pas trouvée.
     */
    static async getUserAverageSessions(url) {
        const userId = parseInt(url.split('/user/')[1]);
        const averageSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
        if (averageSessions) {
            return { data: averageSessions.sessions };
        } else {
            throw new Error('Session moyenne utilisateur non trouvée');
        }
    }

    /**
     * Méthode pour récupérer les performances de l'utilisateur.
     * @param {string} url - L'URL de la requête.
     * @returns {Promise<{data: any}>} - Une promesse résolue avec les performances de l'utilisateur.
     * @throws {Error} - Une erreur si les performances de l'utilisateur ne sont pas trouvées.
     */
    static async getUserPerformance(url) {
        const userId = parseInt(url.split('/user/')[1]);
        const performance = USER_PERFORMANCE.find(performance => performance.userId === userId);
        if (performance) {
            return { data: performance.data };
        } else {
            throw new Error('Performances utilisateur non trouvées');
        }
    }
}

export default MockAPI;
