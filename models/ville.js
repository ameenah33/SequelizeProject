// models/ville.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ville = sequelize.define('Ville', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Ville;
