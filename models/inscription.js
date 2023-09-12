// models/inscription.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Enfant = require('./enfant');

const Inscription = sequelize.define('Inscription', {
  activite: DataTypes.STRING,
  date_inscription: DataTypes.DATE,
  classement_ville: DataTypes.INTEGER,
  age: DataTypes.INTEGER,
});

Inscription.belongsTo(Enfant); // Relation enfant-inscription

module.exports = Inscription;
