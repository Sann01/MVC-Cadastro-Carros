const Sequelize = require('sequelize');
const sequelize =  new Sequelize('railway','root','UAjFzalmcoYd5v6h4pJl',{
    host: 'containers-us-west-160.railway.app',
    dialect: 'mysql',
    port:'7947',
    url:'mysql://root:UAjFzalmcoYd5v6h4pJl@containers-us-west-160.railway.app:7947/railway'
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