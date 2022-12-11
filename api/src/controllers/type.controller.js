// CONTORLADORES DE LA RUTA /types
const axios = require('axios');
const { Pokemon } = require('../db')

const axiostype = async (url) => {
    const pokemon = await axios(url); 
    const respuesta = pokemon.data; // trae la data de la promesa
    const { sprites, name, types } = respuesta; // destructurin de esa respuesta
    return { 
        name: name,
        sprites: sprites.front_default,
        types: types[0].type.name
    } 
}

const findTypePoke = async (req, res, next) => {
    try {
        const pedido = await axios.get('https://pokeapi.co/api/v2/pokemon');
        if (pedido) {
            const pokemons = pedido.data.results;
            const respuesta = pokemons.map(async pk => await axiostype(pk.url));
            const promise = await Promise.all(respuesta);
            const pokeApiInBD = promise.map(async (pk) => await Pokemon.create({ pk }))
            console.log(pokeApiInBD);
            // const pokeBD = Pokemon.create({ promise });
            // console.log(pokeBD, 'pokeBD');                
            res.send(pokeApiInBD)
        }

        // const poke = await findPokeId();
        // const pokeBD = await Pokemon.create({ poke })
        // res.json(pokeBD);
    } catch (error) {
        console.log('ERROOOOR GET TYPE')
        // res.json({ error: error.message })
        next(error)
    };
}

module.exports = { findTypePoke };