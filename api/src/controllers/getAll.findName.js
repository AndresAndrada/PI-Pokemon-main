// CONTORLADORES DE LA RUTA /pokemons
const axios = require('axios');
const { Pokemon } = require('../db')


// TRAE LOS ELEMENTOS DE LA URL DE RESULTS
const axiosUrl = async (url) => {
    const pokemon = await axios(url); 
    const respuesta = pokemon.data; // trae la data de la promesa
    // console.log(respuesta, 'FUN AXIOSURL')
    const { sprites, name, types, height, weight, stats, id} = respuesta; // destructurin de esa respuesta
    // console.log(stats, 'STATS')
    return { 
        id,
        name: name,
        sprites: sprites.front_default,
        types: types.map(tp => tp.type.name),
        height: height,
        weight: weight,
        attack: stats[1].base_stat,
        defending: stats[2].base_stat,
        speed: stats[5].base_stat,
    } 
}

// TRAEMOS TODOS LOS POKEMON DE LA API
const getAllApi = async (req, res, next) => {
    try {
        const pedido = await axios.get('https://pokeapi.co/api/v2/pokemon');
        // console.log(pedido, 'PEDIDO');
        const pokemon = pedido.data.results;
        const list2 = await axios.get(pedido.data.next);
        // console.log(pokeDB, 'POKE DB')
        const listCompl = [...pokemon, ...list2.data.results ];
        // console.log(listCompl, 'LISTA COMPLE')
        const { name } = req.query;
        if(!name) {
            // res.send('hola')
            const respuesta = listCompl.map(async pk => await axiosUrl(pk.url)) // a c/url se le hace un axios
            const pokeDB1 = await Pokemon.findAll()
            const totalPoke = [ ...pokeDB1, ...respuesta ];
            // console.log(totalPoke);
            const promise = await Promise.all(totalPoke); // espera todas las promesas
            // console.log(promise, 'POMISE')
            const resultado = promise.map(pk => {
                return {
                    id: pk.id,
                    name: pk.name,
                    sprites: pk.sprites,
                    types:  !pk.types ? pk.type : pk.types,
                    height: pk.height,
                    weight: pk.weight,
                    attack: pk.attack,
                    defending: pk.defending,
                    speed: pk.speed
                };
            });
            res.send(resultado);
        } else { 
            console.log(name);
            const pokeBd = await Pokemon.findAll()
            // console.log(pokeBd, 'DB')
            const searchApi = listCompl.filter(pk => pk.name.toLowerCase() === name.toLowerCase());
            const searchBD = pokeBd.filter(pk => pk.name.toLowerCase() === name.toLowerCase());

// TRAE EL POKEMEMON FILTRADO POR NAME
            if(!searchApi.length){
                if (searchBD.length > 0) {
                    console.log('ENTRE BD');
                    var pokemonBD = searchBD.map(pk => {
                        return {
                            id: pk.id,
                            name: pk.name,
                            attack: pk.attack,
                            defending: pk.defending,
                            speed: pk.speed,
                            height: pk.height,
                            weight: pk.weight,
                            sprites: pk.sprites,
                            types: pk.type.map(tp => tp)
                        }
                    })
                    res.send(pokemonBD);
                } else {
                    res.json({ message: 'Pokemon no existente' })
                }
            } else if(searchApi.length >0) {
                console.log('ENTRE API')
                const resultado = searchApi.map(async pk => await axiosUrl(pk.url));
                // console.log(resultado, 'RESULT');
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

// ruta "addPoke" post => MODULARIZADA

module.exports = { getAllApi };