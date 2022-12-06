const { Router } = require('express');
const { getAllApi } = require('../controllers/poke.controller');


const pokeApi = Router();

pokeApi.get('/', getAllApi)

module.exports = pokeApi