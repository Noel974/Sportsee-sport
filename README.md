# Projet Projet  


## Sommaire
- [Projet](#projet)
- [Objectif](#objectif)
- [Outils](#outils)

## Projet
Le projet Sportsee est une application web destinée à simplifier la gestion des tâches quotidiennes. Il offre une interface conviviale permettant aux utilisateurs de Suivre leur evolution sportif.

## Objectif
L'objectif principal de ce projet est de développer la page profil de l'utilisateur, en intégrant des éléments graphiques avancés tels que des graphiques et des diagrammes pour présenter les données d'analyse sportive.

## Outils
Ce projet est développé en utilisant les technologies suivantes :
- **Frontend** : React
- **Pro types** : Est une bibliothèque pour valider les props dans les applications React, ce qui peut aider à prévenir les erreurs de typage et à rendre le code plus robuste.
- **Axios** : Est utilisée pour effectuer des requêtes HTTP depuis le navigateur ou Node.js. Elle offre une syntaxe simple et intuitive et prend en charge les fonctionnalités telles que les promesses et les intercepteurs de requêtes et de réponses.
- **Recharts** : Librairie de graphiques pour React 
- **Reacharts** : Libraririe de charts graphique pour react 
- **Env** : Stocker les variables d'environnement de votre application

## ServiceAPI
ServiceAPI fichier qui permert de gérer les données de l'api 
1. Il importe Axios pour effectuer des requêtes HTTP
2. Importation des modèles et des données statiques.
3. Constantes, telles que l'URL de base de l'API et un indicateur pour activer ou désactiver l'utilisation des données mock.
4. Une fonction fetchData utilisée pour récupérer des données à partir d'une source (API ou données mock) et instancier un modèle de données avec ces données.

## Env
Crée un fichier .env puis la configurer exemple : 
REACT_APP_IS_PROD= true
REACT_APP_API_URL="url de l'api".
REACT_APP_MOCK_API= false 

## Navigation Mock API 
En définissant la constante MOCK_API sur true ou false dans le fichier serviceAPI, vous pouvez activer ou désactiver la navigation entre les données mock et l'API. N'oubliez pas de mettre à jour les valeurs correspondantes dans le fichier .env et de redémarrer le serveur pour appliquer les modifications.