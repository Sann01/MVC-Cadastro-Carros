const Sequelize = require('sequelize');
const database = require('./db');

const Carro = database.define('carros',{
    modelo:{
        type: Sequelize.STRING(255),
        allowNull:false
    },
    fabricante:{
        type: Sequelize.STRING(255),
        allowNull:false
    },
    ano:{
        type:Sequelize.INTEGER(4),
        allowNull:false
    },
    placa:{
        type: Sequelize.STRING(255),
        allowNull:false
    },
    numero_renavam:{
        type: Sequelize.INTEGER(11),
        allowNull:false
    },
    imagem:{
        type: Sequelize.STRING(400),
        allowNull:false
    }
})


