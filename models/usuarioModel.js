const Sequelize = require('sequelize');
const database = require('./db');
const AddUser = database.sequelize.define('usuarios',{
    nome:{
        type: database.Sequelize.STRING,
        allowNull:false
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


module.exports = AddUser;