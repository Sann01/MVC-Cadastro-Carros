const login = [];
const Usuario = require("../models/usuarioModel");

function getLogin(req, res) {
    res.render("layouts/default/login", { login });
}
function msg (req,res){

}

function logar (req,res){
    if(req.body.senha != req.body.confirmSenha){
    res.redirect("layouts/default/");
    
} 
else if(req.body.senha == req.body.confirmSenha){
    res.redirect("layouts/default/login");
    Usuario.create({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha
    }).then(function(){

    }).catch(function(error){
        res.render
    })
}
}

module.exports = {getLogin};