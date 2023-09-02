const login = [];
const usuario = require("./models/usuarioModel");
function getLogin(req, res) {
    res.render("./layouts/default/login", { login });
}

function getlogar(req,res){
    res.render('login',{erro:null});
}

function auth (req,res){
    const email = req.body.email;
    const senha = req.body.senha;

    if(!email|| !senha){
        res.render('login',{content:'login'});
    }
    usuario.autenticar(email,senha)
    .then(user);{
        if(user){
            res.redirect('/home');
        }else{
            res.render('login', {erro:'erro'});
        }
        
    }
}

module.exports = {getLogin};