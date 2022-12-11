const { Pokemon, Type } = require('../db')

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

module.exports = { addPoke };