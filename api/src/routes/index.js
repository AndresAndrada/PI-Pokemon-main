const { Router } = require('express');
const pokeApi = require('./pokeApi');
const pokeType = require('./pokeType');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokeApi);
router.use('/types', pokeType);




module.exports = router;
