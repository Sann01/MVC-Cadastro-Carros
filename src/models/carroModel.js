const Sequelize = require('sequelize');
const database = require('./db');

const Carro = database.sequelize.define('carros',{
    modelo:{
        type: database.Sequelize.STRING(255),
        allowNull:false
    },
    fabricante:{
        type: database.Sequelize.STRING(255),
        allowNull:false
    },
    ano:{
        type: database.Sequelize.INTEGER(4),
        allowNull:false
    },
    placa:{
        type: database.Sequelize.STRING(255),
        allowNull:false
    },
    numero_renavam:{
        type: database.Sequelize.INTEGER(11),
        allowNull:false
    },
    imagem:{
        type: database.Sequelize.STRING(400),
        allowNull:false
    }
})

module.exports = Carro;