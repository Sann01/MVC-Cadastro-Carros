const Sequelize = require('sequelize');
const sequelize =  new Sequelize('cadastro_carros','root','vertrigo',{
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function(){
    console.log("Conectado com o banco de dados");
}).catch(function(erro){
    console.log("Falha ao conectar com banco de dados:" + erro);
})

module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize 
};