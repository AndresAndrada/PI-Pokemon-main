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


const FindPokeId = (obj) => {
    const {id, name, sprites, types, height, stats} =  obj;
    return {
        id,
        name,
        sprites: sprites.front_default,
        types: types[0].type.name,
        height,
        stats,
    }


    // const pokemon = await axios(url); 
    // const respuesta = pokemon.data; // trae la data de la promesa
    // const {id, name, sprites, types} = respuesta; // destructurin de esa respuesta
    // return { 
    //     id: parseInt(id),
    //     name: name,
    //     sprites: sprites.front_default,
    //     types: types[0].type.name,
    //     // height: height,
    //     // stats: stats
    // } 
}

// TRAE EL DETALLE DE POKEMON POR MEDIO DEL ID
const findPokeId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pedido = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const todoPoke = pedido.data;
        // console.log(todoPoke.id, 'ENTRE') // ENTROOOO
        const resultado = FindPokeId(todoPoke)
        // console.log(todoPoke)


        res.json(resultado) 

        // const pokemon = todoPoke.hasOwnProperty(idPoke);
        // if (pokemon) {
        //     const {id, name, sprites, types} = todoPoke;
        //     return { 
        //         id: todoPoke.id;
        //     }
        // }


        // const respuesta = pokemon.map(async pk => await axiosUrl1(pk.url));
        // const promise = await Promise.all(respuesta); // espera todas las promesas
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllApi,
    findPokeId
};