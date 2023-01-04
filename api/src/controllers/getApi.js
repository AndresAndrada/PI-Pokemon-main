const axios = require('axios');

// const axiosUrl = async (url) => {
//     const pokemon = await axios(url); 
//     const respuesta = pokemon.data; // trae la data de la promesa
//     // console.log(respuesta, 'FUN AXIOSURL')
//     const { sprites, name, types, height, weight, id} = respuesta; // destructurin de esa respuesta
//     return { 
//         id,
//         name: name,
//         sprites: sprites.front_default,
//         types: types[0].type.name,
//         height: height,
//         weight: weight
//     };
// };

const getApi = async (req, res, next) => {
    try {
        // const pedido = await axios.get('https://pokeapi.co/api/v2/pokemon');
        // console.log(pedido, 'PEDIDO API');
        // const pokemon = pedido.data.results;
        // console.log(pokemon, 'POKE API');
        // const list2 = await axios.get(pedido.data.next);
        // const listCompl = [ ...pokemon, ...list2.data.results ];
        // const promise = await Promise.all(listCompl);
        // const respuesta = listCompl.map(async pk => await axiosUrl(pk.url))
        // const resultado = respuesta.map(pk => {
        //     return {
        //         id: pk.id,
        //         name: pk.name,
        //         sprites: pk.sprites,
        //         types: pk.types
        //     }
        // })
        res.send('resultado')
    } catch (error) {
        console.log('ERROOOOR GET POKE API')
        next(error)
    };
};

module.exports = { getApi };