const Sequelize = require('sequelize');
const sequelize =  new Sequelize('cadastro_carros','root','vertrigo',{
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function(){
    console.log("conectado com o banco de dados")
}).catch(function(erro){
    console.log("falha ao conectar ao banco de dados:" + erro)
})

module.exports = sequelize;