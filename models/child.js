// models/enfant.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Enfant = sequelize.define('Enfant', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: DataTypes.STRING,
  date_de_naissance: DataTypes.DATE,
  sexe: DataTypes.STRING,
});

Enfant.belongsTo(User); // Relation parent-enfant

module.exports = Enfant;
