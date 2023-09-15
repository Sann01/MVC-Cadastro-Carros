const login = [];
const AddUser = require("../models/usuarioModel");

async function getLogin(req, res) {
    res.render("layouts/default/login", { login });
}

async function logar(req, res) {
    try {
        const { senha } = req.body;
        const usuario = await AddUser.findOne({ where: { senha } });

        if (!usuario) {
            res.send("A senha está incorreta");
        } else {
            res.redirect('/home');
        }
    } catch (error) {
        console.error("Erro ao verificar a senha:", error);
        res.status(500).send("Erro interno do servidor");
    }
}

module.exports = { getLogin, logar };
