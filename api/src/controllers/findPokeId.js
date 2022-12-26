const axios = require('axios');
const { Pokemon } = require('../db')

// Destructurin de obj que se le pasa por parametros
const findId = (obj) => {
    const { id, name, sprites, types, height, stats } =  obj; 
    return {
        id,
        name,
        sprites: sprites.front_default,
        types: types[0].type.name,
        height,
        attack: stats[1].base_stat,
        defending: stats[2].base_stat,
        speed: stats[5].base_stat,
        types: types[0].type.name
    };
};


// TRAE EL DETALLE DE POKEMON POR MEDIO DEL ID
const findPokeId = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(typeof req.url, id, 'ID URL')
        // const pokeDB = await Pokemon.findAll();
        // console.log(pokeDB[0].id, 'POKE DB')
        const pokeDB = await Pokemon.findAll();
        const search = pokeDB.filter(pk => pk.id === id); 
        if(search.length) {
            if(search) {
                for (let i=0; i<search.length; i++) {
                    var pokeFindDB = {
                        id: search[i].id,
                        name: search[i].name,
                        life: search[i].life,
                        attack: search[i].attack,
                        defending: search[i].defending,
                        speed: search[i].speed,
                        height: search[i].height,
                        weight: search[i].weight,
                        sprites: search[i].sprites,
                        type: search[i].type
                    }                    
                }
                res.json(pokeFindDB);
            } else {
                res.json({ message: 'Poquemon no existente'})
            }            
        } else {
            const pedido = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const todoPoke = pedido.data;
            const resultado = findId(todoPoke) // trae las propiedades necesarias
            res.json(resultado);
        }
    } catch (error) {
        console.log('ERROOOOR GET POKE ID')
        next(error.message);
    };
};

module.exports = { findPokeId };