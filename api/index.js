const axios = require('axios')
const { Type } = require('./src/db')
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { // force => elimina toda la tabla y crea una nueva || alter: true modifica la tabla
  server.listen(3001, async () => {
    const pedido = await axios.get('https://pokeapi.co/api/v2/type'); // trae los tipos de la api apenas levanta el servidor
    // console.log(pedido.data.results, 'PEDIDO')
        const type = pedido.data.results.map(t => {
          return {
            name: t.name
          }
        }); // devuelve c/name de tipo
        const typeDB = await Type.findAll();
        // console.log(typeDB, 'TYPEDB');
        if(!typeDB.length) {
          await Type.bulkCreate(type); // crea los tipos en la DB
        }
        // type.map(async t => await Type.bulkCreate({ name: t.name }));
    console.log('listening at 3001'); // eslint-disable-line no-console
  });
});
