const Sequelize = require('sequelize');
const sequelize =  new Sequelize(process.env.DB_DATABASE,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect: 'mysql',
    port:process.env.DB_PORT,
    url:process.env.DB_URL_RAILWAY
});
sequelize.authenticate().then(function(){
    console.log("Conectado com o banco de dados");
}).catch(function(erro){
    console.log("Falha ao conectar com banco de dados:" + erro);
})

//connection.query("DELETE FROM usuarios WHERE id = id", function(err,result){
//if(!err){
//    console.log("Usuario apagado com sucesso!");
//}else{
//    console.log("Erro, não foi possível apagar o usuário");
//}
//});

module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize 
};