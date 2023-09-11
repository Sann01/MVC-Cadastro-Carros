const cadastroUsuario = [];
const AddUser = require("../models/usuarioModel");

function getCadastroUsuario(req, res) {
    res.render('layouts/default/register', { cadastroUsuario });
}
function auth (req,res){
    
const senha = req.body.senha;
const confirmSenha = req.body.confirmSenha;

    if(senha != confirmSenha){
    res.redirect("layouts/default/register");
} 
else if(req.body.senha == req.body.confirmSenha){
    res.redirect("layouts/default/login");
    res.render("layouts/default/login");
    AddUser.create({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha,
        confirmSenha:req.body.confirmSenha
    }).then(function(){
        console.log("Cadastrado com sucesso!");
        res.redirect('/login');
    }).catch(function(error){
        console.log("Erro ao efetuar o cadastro" + error); 
    })
}
}
//const usuario = await AddUser.email(email);


module.exports = {getCadastroUsuario, auth};