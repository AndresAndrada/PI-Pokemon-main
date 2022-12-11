// CONTORLADORES DE LA RUTA /pokemons
const axios = require('axios');
const { Pokemon, Type } = require('../db')


// TRAE LOS ELEMENTOS DE LA URL DE RESULTS
const axiosUrl = async (url) => {
    const pokemon = await axios(url); 
    const respuesta = pokemon.data; // trae la data de la promesa
    // console.log(respuesta, 'FUN AXIOSURL')
    const { sprites, name, types } = respuesta; // destructurin de esa respuesta
    return { 
        name: name,
        sprites: sprites.front_default,
        types: types[0].type.name
    } 
}

// TRAEMOS TODOS LOS POKEMON DE LA API
const getAllApi = async (req, res, next) => {
    try {
        const pedido = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemon = pedido.data.results;
        const { name } = req.query;
        if(!name) {
            // res.send('hola')
            const respuesta = pokemon.map(async pk => await axiosUrl(pk.url)) // a c/url se le hace un axios
            const promise = await Promise.all(respuesta); // espera todas las promesas
            res.send(promise) 
        } else { 
            const pokeBd = await Pokemon.findAll()
            // console.log(pokeBd, 'db')
            const searchApi = pokemon.filter(pk => pk.name.toLowerCase() === name.toLowerCase());
            const searchBD = pokeBd.filter(pk => pk.name.toLowerCase() === name.toLowerCase());

// TRAE EL POKEMEMON FILTRADO POR NAME
            if(searchApi.length < 1){
                if (searchBD.length > 0) {
                    console.log('ENTRE A QUERY BD');
                    // res.send('ENTRE A QUERY BD')
                    var pokemonBD = searchBD.map(pk => {
                        return {
                            id: pk.id,
                            name: pk.name,
                            attack: pk.attack,
                            defending: pk.defending,
                            speed: pk.speed,
                            height: pk.height,
                            weight: pk.weight
                        }
                    })
                    res.send(pokemonBD);
                } else {
                    res.json({ message: 'Pokemon no existente' })
                }
            } else if(searchApi.length >0) {
                console.log('ENTRE API')
                const resultado = searchApi.map(async pk => await axiosUrl(pk.url));
                const promise = await Promise.all(resultado);
                res.json(promise);
            } 
        }
    } catch (error) {
        console.log('ERROOOOR GET POKE')
        next(error)
    };
};

// funcion "FindPokeId" destructurin del obj => MODULARIZADA

// ruta "findPokeId" filtra por id => MODULARIZADA

// CREA UN PERSONAJE EN BD
const addPoke = async (req, res, next) => {
    const { pokemon } = req.body;
    // console.log(pokemon.type);
    // console.log(pokemon, 'BODY')
    try {
        if(pokemon.name) {
            const { name, life, attack, defending, speed, height, weight, type } = pokemon
            let pokeNew = await Pokemon.create({ name, life, attack, defending, speed, height, weight, type });
            // console.log(pokeNew, 'NEW')
            let  typePoke = await Type.create({name: type }) // NO FUNCIONA => investigar las sintaxis
            // console.log(typePoke, 'TYPE');
            pokeNew.addType(typePoke);
            res.json({message: 'Creado correctamente'});
        } else {
            res.json({ message: 'Debe completar el formulario correcta mente'});
        }; 
        // res.json({ message: 'POST' })
    } catch (error) {
        console.log('ERROOOOR POST');
        next(error);
    };
};

module.exports = {
    getAllApi,
    addPoke
};