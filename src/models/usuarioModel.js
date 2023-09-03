const Sequelize = require('sequelize');
const database = require('./db');

const addUser = database.sequelize.define('usuarios',{
    nome:{
        type: database.Sequelize.STRING
    },
    email:{
        type: database.Sequelize.STRING,
        allowNull:false
    },
    senha:{
        type: database.Sequelize.STRING,
        allowNull:false
    }
})

module.exports = addUser;