const { Router } = require('express');
const { getAllApi } = require('../controllers/getAll.findName');
const { findPokeId } = require('../controllers/findPokeId');
const { addPoke } = require('../controllers/addPoke');
const { getApi } = require('../controllers/getApi');


const pokeRouter = Router();
// GET
pokeRouter.get('/', getAllApi);
pokeRouter.get('/:id', findPokeId);
pokeRouter.post('/', getApi);

// POST
pokeRouter.post('/pokemon', addPoke)


module.exports = pokeRouter