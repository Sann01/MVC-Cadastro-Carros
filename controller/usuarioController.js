const usuarioModel = require('../models/usuarioModel');

function getLogin(req, res) {
    res.render('login');
}

async function auth(req, res){
    const resp = await usuarioModel.auth(req.body.email, req.body.senha);
    console.log(resp);
    if(resp.length > 0){
        req.session.usuario = {
            id: resp[0].id,
            email: resp[0].email
        };
        res.redirect('/carros');
    } else {
        console.log('Usuário ou senha inválidos');
        res.redirect('/login');
    }
}

module.exports = { getLogin, auth };