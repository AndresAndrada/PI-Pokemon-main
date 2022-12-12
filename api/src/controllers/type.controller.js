// CONTORLADORES DE LA RUTA /types
const axios = require('axios');
const { Pokemon, Type } = require('../db')

// const axiostype = async (url) => {
//     const pokemon = await axios(url); 
//     const respuesta = pokemon.data; // trae la data de la promesa
//     const { sprites, name, types } = respuesta; // destructurin de esa respuesta
//     return { 
//         name: name,
//         sprites: sprites.front_default,
//         types: types[0].type.name
//     } 
// }

const findTypePoke = async (req, res, next) => {
    try {
        const type = await Type.findAll() // busca todos los tipos a la DB
        res.json(type);
    } catch (error) {
        console.log('ERROOOOR GET TYPE')
        // res.json({ error: error.message })
        next(error)
    };
}

module.exports = { findTypePoke };