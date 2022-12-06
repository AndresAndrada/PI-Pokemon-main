const { Router } = require('express');


const pokeApi = Router();

pokeApi.get('/', (req, res) => {
    res.send('Estoy en pokemon');
})

module.exports = pokeApi