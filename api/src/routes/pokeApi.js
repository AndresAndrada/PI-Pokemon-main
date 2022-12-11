const { Router } = require('express');
const { getAllApi } = require('../controllers/getAll.findName');
const { findPokeId } = require('../controllers/findPokeId');
const { addPoke } = require('../controllers/addPoke');


const pokeRouter = Router();
// GET
pokeRouter.get('/', getAllApi);
pokeRouter.get('/:id', findPokeId);

// POST
pokeRouter.post('/pokemon', addPoke)

module.exports = pokeRouter