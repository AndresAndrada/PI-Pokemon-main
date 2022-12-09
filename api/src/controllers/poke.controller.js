// CONTORLADORES DE LA RUTA /pokemons
const axios = require('axios');
const { Pokemon } = require('../db')


// TRAE LOS ELEMENTOS DE LA URL DE RESULTS
const axiosUrl = async (url) => {
    const pokemon = await axios(url); 
    const respuesta = pokemon.data; // trae la data de la promesa
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
        console.log('ERROOOOR')
        next(error)
    };
};

// Destructurin de obj que se le pasa por parametros
const FindPokeId = (obj) => {
    const { id, name, sprites, types, height, stats } =  obj; 
    return {
        id,
        name,
        sprites: sprites.front_default,
        types: types[0].type.name,
        height,
        stats,
    };
};

// TRAE EL DETALLE DE POKEMON POR MEDIO DEL ID
const findPokeId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pedido = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const todoPoke = pedido.data;
        // console.log(todoPoke.id, 'ENTRE') // ENTROOOO
        const resultado = FindPokeId(todoPoke) // trae las propiedades necesarias
        // console.log(todoPoke)
        res.json(resultado) 
    } catch (error) {
        console.log('ERROOOOR')
        next(error);
    };
};

// CREA UN PERSONAJE EN BD
const addPoke = async (req, res,next) => {
    const { pokemon } = req.body;
    console.log(req.body);
    try {
        if(pokemon) {
            let pokeNew = await Pokemon.create(pokemon)
            // pokeNew ? res.json({ pokeNew }) : res.json({ message: 'No se creo' })
            return res.json(pokeNew) 
        } else {
            return res.json({ message: 'Debe completar el formulario correctamente'})
        }
        // res.json({ message: 'POST' })
    } catch (error) {
        console.log('ERROOOOR');
        next(error);
    };
};

module.exports = {
    getAllApi,
    findPokeId,
    addPoke
};