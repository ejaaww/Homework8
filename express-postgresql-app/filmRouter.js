const express = require('express');
const { DataTypes } = require('sequelize');
const router = express.Router();

router.get('/', (req, res) => {
    film_id: DataTypes.Integer,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  
  router.get('/:id', (req, res) => {
    film_id: DataTypes.Integer,
  });
  
  router.get('/categories', (req, res) => {
    
  });
  
  router.get('/filmsByCategory/:category', (req, res) => {
  });
  
  module.exports = router;