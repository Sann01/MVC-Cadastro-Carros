const cadastroUsuario = [];
const AddUser = require("../models/usuarioModel");
const md5 = require('md5');
function getCadastroUsuario(req, res) {
    res.render('layouts/default/register', { cadastroUsuario });
}
function auth (req,res){
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const confirmSenha = req.body.confirmSenha;

    if(senha != confirmSenha){
    res.redirect("layouts/default/register");
    
} 
else if(req.body.senha == req.body.confirmSenha){
    res.redirect("layouts/default/login");
    AddUser.create({
        nome,
        email,
        senha,
    }).then(function(){
        console.log("Cadastrado com sucesso!");
    }).catch(function(error){
        console.log("Erro ao efetuar o cadastro" + error); 
    })
}
}

module.exports = {getCadastroUsuario, auth};