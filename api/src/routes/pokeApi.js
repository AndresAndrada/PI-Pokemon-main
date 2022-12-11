const { Router } = require('express');
const { getAllApi, addPoke } = require('../controllers/poke.controller');
const { findPokeId } = require('../controllers/findPokeId')

const pokeRouter = Router();
// GET
pokeRouter.get('/', getAllApi);
pokeRouter.get('/:id', findPokeId);

// POST
pokeRouter.post('/pokemon', addPoke)

module.exports = pokeRouter