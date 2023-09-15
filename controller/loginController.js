const login = [];
const AddUser = require("../models/usuarioModel");

function getLogin(req, res) {
    res.render("layouts/default/login", { login });
}

function logar(req,res){
    const {nome, email, senha, confirmSenha} = req.body;
    const senhaBanco = AddUser.findOne({where:{senha}});
    if(senha !=confirmSenha){
        res.send("aaaaaaaaaaaa");
    }
    else if(senha == confirmSenha){
        res.redirect('/home');
    }
}

module.exports = { getLogin,logar};