const { Router } = require('express');
const { getAllApi, findPokeId } = require('../controllers/poke.controller');


const pokeRouter = Router();

pokeRouter.get('/', getAllApi);
pokeRouter.get('/:id', findPokeId);
// pokeRouter.get('/pokemons', findPokeName);

module.exports = pokeRouter