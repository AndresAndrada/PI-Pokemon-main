const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4, // designa un id que lo diferencia de la api
      primaryKey: true // unico id
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // no sea null
    },
    life: { // vida
      type: DataTypes.INTEGER,
      // unique: true // un unico valor,
    },
    attack: { // ataque
      type: DataTypes.INTEGER,
    },
    defending: { // defending
      type: DataTypes.INTEGER,
    },
    speed: { // velocidad
      type: DataTypes.INTEGER
    },
    height: { // altura
      type: DataTypes.INTEGER
    },
    weight: { // peso
      type: DataTypes.INTEGER
    },
    sprites: {
      type: DataTypes.STRING, 
      // allowNull: false
    },   
    type: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
  },
  {
    timestamps: false,
  });

  sequelize.define('type', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
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
