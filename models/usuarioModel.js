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
AddUser.email = function(email){
    return AddUser.findOne({where:{email:email}}).then(usuario=>{
        if(usuario){
            return usuario;
        }
        else{
            return null;
        }
    }).catch(err=>{
        throw err;
    });
}

module.exports = AddUser;