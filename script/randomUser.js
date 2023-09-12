const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config/config.js'); // Assurez-vous d'importer votre configuration Sequelize

const User = require('./models/user.js'); // Assurez-vous d'importer votre modèle Sequelize pour "utilisateur"
const faker = require('faker');

// Fonction pour générer des données aléatoires pour un utilisateur
function generateRandomUser() {
  return {
    nom: faker.name.lastName(),
    prenom: faker.name.firstName(),
    email: faker.internet.email(),
    ville: faker.address.city(),
    mot_de_passe: faker.internet.password(),
  };
}

// Fonction pour insérer des données aléatoires dans la table "utilisateur"
async function insertRandomUsers(count) {
  try {
    for (let i = 0; i < count; i++) {
      const randomUser = generateRandomUser();
      await User.create(randomUser);
    }
    console.log(`${count} utilisateurs aléatoires ont été insérés avec succès.`);
  } catch (error) {
    console.error('Erreur lors de l\'insertion des utilisateurs aléatoires :', error);
  } finally {
    sequelize.close(); // Fermez la connexion à la base de données lorsque vous avez terminé.
  }
}

// Appelez la fonction pour insérer un nombre donné d'utilisateurs aléatoires (par exemple, 10).
insertRandomUsers(50);
