const login = [];
const usuario = require("../models/usuarioModel");
function getLogin(req, res) {
    res.render("layouts/default/login", { login });
}
function msg (req,res){

}

module.exports = {getLogin};