const {Router} = require('express');

const pokeType = Router();

pokeType.get('/', (req, res) => {
    res.send('Estoy en type')
});

module.exports = pokeType;