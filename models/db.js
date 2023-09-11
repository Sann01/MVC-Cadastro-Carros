const Sequelize = require('sequelize');
const sequelize =  new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect: 'mysql',
    port:process.env.PORT,
    url:process.env.URL_RAILWAY
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