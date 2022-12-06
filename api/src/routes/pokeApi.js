const { Router } = require('express');
const { getAllApi } = require('../controllers/poke.controller');


const pokeApi = Router();

pokeApi.get('/', getAllApi);
// pokeApi.get('/:id', findPokeId);

module.exports = pokeApi