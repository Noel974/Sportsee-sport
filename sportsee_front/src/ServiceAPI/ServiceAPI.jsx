import axios from 'axios';
import UserModel from '../Assets/Model/User';
import PerformanceModel from '../Assets/Model/Performoance';
import AverageSessionsModel from '../Assets/Model/AverageSession';
import ActivityModel from '../Assets/Model/Activity';
import {performanceData, averageSessionsData, activityData } from '../Assets/Data/Sportseejson';

// Constantes
const API_URL = process.env.REACT_APP_API_URL;
const MOCK_API = process.env.REACT_APP_MOCK_API ===  '';

/**
 * Cette fonction est utilisée pour récupérer des données à partir d'une source de données mock ou d'une API.
 *
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel les données doivent être récupérées.
 * @param {string} resource - Le type de ressource à récupérer.
 * @param {Object} Model - Le modèle à utiliser pour créer une nouvelle instance de données.
 * @param {Object} mockData - Les données mock à utiliser si useMock est vrai.
 * @param {string} baseUrl - L'URL de base de l'API à partir de laquelle récupérer les données.
 * @param {boolean} useMock - Un booléen indiquant si les données mock doivent être utilisées.
 * @returns {Object} Une nouvelle instance du modèle contenant les données récupérées.
 * @throws {Error} Si les données ne peuvent pas être récupérées.
 */
const fetchData = async (userId, resource, Model, mockData, baseUrl, useMock) => {
    try {
      // Si useMock est vrai, utilisez les données mock.
      if (useMock) {;
        const data = mockData[userId];
        // Si aucune donnée mock n'est disponible pour cet utilisateur, lancez une erreur.
        if (!data) throw new Error(`No ${resource} data for user ${userId}`);
        // Retournez une nouvelle instance du modèle avec les données mock.
        return new Model(data);
      } else {
        // Sinon, récupérez les données de l'API.
        const response = await axios.get(`${baseUrl}${userId}/${resource}`);
        const data = response.data;
        // Retournez une nouvelle instance du modèle avec les données de l'API.
        return new Model(data.data);
      }
    } catch (error) {
      // Si une erreur se produit lors de la récupération des données, enregistrez l'erreur et relancez-la.
      console.error(`Failed to fetch ${resource} data`, error);
      throw error;
    }
  };
  

/**
 * Fonction asynchrone pour récupérer les informations d'un utilisateur à partir de son ID.
 * @param {number} id - L'identifiant de l'utilisateur à récupérer.
 * @returns {Object} - Les informations de l'utilisateur.
 */
export const getUserInfos = async (id) => {
    if (MOCK_API) {
      console.log('vous etre sur mock API...');
      try {
        const dataModule = await import(`../Assets/Data/User${id}.json`);
        const data = dataModule[id];
        if (!data) {
          throw new Error(`No user with id ${id}`);
        }
        console.log('User data fetched successfully from mock API:', data);
        return new UserModel(data.data); // Notez l'accès à data.data ici
      } catch (error) {
        console.error('Failed to fetch user data from mock API', error);
        throw error;
      }
    } else {
      console.log('vous etre sur  real API...');
      try {
        const response = await axios.get(`${API_URL}${id}`);
        const res = response.data;
        console.log('User data fetched successfully from real API la reponse data:', response.data);
        return new UserModel(res.data);
      } catch (error) {
        console.error('Failed to fetch user data from real API', error);
        throw error;
      }
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
        const res = await fetchData(id, 'activity', ActivityModel, activityData, API_URL, MOCK_API);
        console.log('Activité de l\'utilisateur récupérée avec succès :', res);
        return res;
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
        const res = await fetchData(id, 'average-sessions', AverageSessionsModel, averageSessionsData, API_URL, MOCK_API);
        console.log('Session moyenne de l\'utilisateur récupérée avec succès :', res);
        return res;
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
        const res = await fetchData(id, 'performance', PerformanceModel, performanceData, API_URL, MOCK_API);
        console.log('Performances de l\'utilisateur récupérées avec succès :', res);
        return res;
    } catch (error) {
        console.error('Erreur lors de la récupération des performances de l\'utilisateur :', error);
        throw error;
    }
};