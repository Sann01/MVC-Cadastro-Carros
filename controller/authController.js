const authModel = require("layout/default/usuarioModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 

async function getUsers(req, res) {
    users = await userModel.listarUsuarios();
    res.render('users', { users });
}  
function login(req, res) {
    res.render('login');
}

async function auth(req, res) {

if (!req.body.email || !req.body.senha) {
    erro = "Credenciais inválidas";
    res.redirect('/login');
    }

    const {email,senha,token} = req.body;

    const resp = await authModel.auth({email,senha,token});

    if (resp.auth) {
    req.session.usuario = {
        id: resp.user.id,
        email: resp.user.email, 
        token: resp.token
    };
    res.redirect('/home');
    } else {
    erro = resp.message;
    res.redirect('/login');
    }
    console.log(resp);
}

module.exports = { login, auth, getUsers };