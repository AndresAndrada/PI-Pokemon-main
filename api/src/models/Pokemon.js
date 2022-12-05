const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      default: DataTypes.UUIDV4, // designa un id que lo diferencia de la api
      primaryKey: true // unico id
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // no sea null
    },
    vida: {
      type: DataTypes.STRING,
      // unique: true // un unico valor,
    },
    ataque: {
      type: DataTypes.STRING,
    },
    defensa: {
      type: DataTypes.STRING,
    },
    velocidad: {
      type: DataTypes.INTEGER
    },
    altura: {
      type: DataTypes.INTEGER
    },
    peso: {
      type: DataTypes.INTEGER
    },
    
  },
  {
    timestamps: false,
  });

  sequelize.define('tipo', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      default: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // no sea null
    }
  },
  {
    timestamps: false,
  })
};
