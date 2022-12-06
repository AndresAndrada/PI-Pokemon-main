// CONTORLADORES DE LA RUTA /pokemons

const getAllApi = (req, res, next) => {
    try {
        res.send('getAll')
    } catch (error) {
        next(error)
    }
} 

module.exports = {
    getAllApi
};