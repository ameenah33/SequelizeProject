const Sequelize = require('sequelize');
const config = require('./config/config.js'); 

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);
async function testDatabaseConnection() {
    try {
      await sequelize.authenticate();
      console.log('La connexion à la base de données PostgreSQL a réussi.');
    } catch (error) {
      console.error('Erreur de connexion à la base de données PostgreSQL:', error);
    } finally {
      sequelize.close(); 
    }
  }
  
  testDatabaseConnection();