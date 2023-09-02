const newUser = [];
const usuarioModel = require('./layouts/default/usuarioModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


let msg = " ";

function getNewUser(req, res) {
    res.render("layouts/default/login", { newUser });
}

async function login(req, res){
    const data = req.body;

    const usuario = await usuarioModel.findOne({
        atributer: ['nome', 'email', 'senha'],
        where: {
            email: data.email
        }
    });

    if(user === null){
        msgErro = "Credenciais eradas"
        res.render("login", {msgErro});
    }
    else if(!(await bcrypt.compare(data.senha, user.senha))){
        msgErro = "Credenciais incorretas"
        res.render("login", {msgErro});
    }
    else{
        let token = jwt.sign({email: usuario.email}, process.env.SECRET, {expiresIn: '86400000'});
    
        req.session.token = token;
        req.session.email = usuario.email;

        res.redirect('/cadastro');
    }
}



module.exports = {getNewUser,login};