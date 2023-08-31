const Sequelize = require('sequelize');
const database = require('./db');

const Usuario = database.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    senha:{
        type:Sequelize.STRING
    }
})
