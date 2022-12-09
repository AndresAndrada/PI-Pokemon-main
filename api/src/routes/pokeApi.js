const { Router } = require('express');
const { getAllApi, findPokeId, addPoke } = require('../controllers/poke.controller');


const pokeRouter = Router();
// GET
pokeRouter.get('/', getAllApi);
pokeRouter.get('/:id', findPokeId);

// POST
pokeRouter.post('/pokemon', addPoke)

module.exports = pokeRouter