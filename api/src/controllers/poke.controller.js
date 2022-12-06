// CONTORLADORES DE LA RUTA /pokemons
const axios = require('axios');
// const { Pokemon } = require('../db')


// TRAE LOS ELEMENTOS DE LA URL DE RESULTS
const axiosUrl = async (url) => {
    const pokemon = await axios(url); 
    const respuesta = pokemon.data; // trae la data de la promesa
    const {sprites, name, types} = respuesta; // destructurin de esa respuesta
    return { 
        name: name,
        sprites: sprites.front_default,
        types: types[0].type.name
    } 
}

// TRAEMOS TODOS LOS POKEMON DE LA API
const getAllApi = async (req, res, next) => {
    try {
        // res.send('hola')
        const pedido = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemon = pedido.data.results;
        const respuesta = pokemon.map(async pk => await axiosUrl(pk.url)) // a c/url se le hace un axios
        const promise = await Promise.all(respuesta); // espera todas las promesas
        res.send(promise) 
    } catch (error) {
        next(error)
    }
} 

const axiosUrl1 = async (url) => {
    const pokemon = await axios(url); 
    const respuesta = pokemon.data; // trae la data de la promesa
    const {id, name, sprites, height, types} = respuesta; // destructurin de esa respuesta
    return { 
        id: id,
        name: name,
        sprites: sprites.front_default,
        types: types[0].type.name,
        height: height
    } 
}

const findPokeId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pedido = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon = pedido.data.results;
        const respuesta = pokemon.map(async pk => await axiosUrl1(pk.url));
        const promise = await Promise.all(respuesta); // espera todas las promesas
        res.send(promise) 
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllApi,
    findPokeId
};