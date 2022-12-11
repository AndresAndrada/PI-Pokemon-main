const { default: axios } = require('axios');
const {Router} = require('express');
const { findTypePoke } = require('../controllers/type.controller');



const pokeType = Router();

pokeType.get('/', findTypePoke);

module.exports = pokeType;