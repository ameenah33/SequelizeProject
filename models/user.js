// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  ville: DataTypes.STRING,
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
