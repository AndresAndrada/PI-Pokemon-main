const axios = require('axios');

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
        console.log('ERROOOOR GET POKE ID')
        next(error);
    };
};

module.exports = { findPokeId };