// CONTORLADORES DE LA RUTA /pokemons
const axios = require('axios');
const { response } = require('express');
const { name } = require('../app');
// const { Pokemon } = require('../db')

const getAllApi = async (req, res, next) => {
    try {
        // res.send('hola')
        const pedido = await axios.get('https://pokeapi.co/api/v2/pokemon')
        if(pedido) {
        //     const character = pedido.data.map(pk => {
        //         return {
        //             name: pk.name

        //         } 
        //     })
            res.send(pedido.data)
        } else {
            res.json({message: 'Algo salio mal'})
        }
    } catch (error) {
        next(error)
    }
} 

module.exports = {
    getAllApi
};