import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from '../Assets/Data/SportseeApi';

console.log(USER_ACTIVITY);
console.log(USER_AVERAGE_SESSIONS);
console.log(USER_PERFORMANCE);

// Définissez une classe MockAPI qui simule Axios
class MockAPI {
    static async get(url) {
        if (url.includes('/user/')) {
            const userId = parseInt(url.split('/user/')[1]);
            const user = USER_MAIN_DATA.find(user => user.id === userId);
            if (user) {
                return { data: user.userInfos };
            } else {
                throw new Error('Utilisateur non trouvé');
            }
        } else if (url.includes('/activity')) {
            // Simulation de récupération de l'activité de l'utilisateur
            const userId = parseInt(url.split('/user/')[1]);
            const userActivity = USER_ACTIVITY.find(activity => activity.userId === userId);
            if (userActivity) {
                return { data: userActivity.sessions };
            } else {
                throw new Error('Activité utilisateur non trouvée');
            }
        } else if (url.includes('/average-sessions')) {
            // Simulation de récupération de la session moyenne de l'utilisateur
            const userId = parseInt(url.split('/user/')[1]);
            const averageSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
            if (averageSessions) {
                return { data: averageSessions.sessions };
            } else {
                throw new Error('Session moyenne utilisateur non trouvée');
            }
        } else if (url.includes('/performance')) {
            // Simulation de récupération des performances de l'utilisateur
            const userId = parseInt(url.split('/user/')[1]);
            const performance = USER_PERFORMANCE.find(performance => performance.userId === userId);
            if (performance) {
                return { data: performance.data };
            } else {
                throw new Error('Performances utilisateur non trouvées');
            }
        } else {
            throw new Error('URL non prise en charge');
        }
    }
}
export default MockAPI;

