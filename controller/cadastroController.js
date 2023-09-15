const cadastroUsuario = [];
const AddUser = require("../models/usuarioModel");

function getCadastroUsuario(req, res) {
    res.render('layouts/default/register', { cadastroUsuario });
}

async function cadastrar(req, res) {

    try {
        const {nome, email, senha, confirmSenha} = req.body;

        const user = await AddUser.findOne({ where: { email } })

        if (user) {
            res.status(200).json({ message: "email ja cadastrado" })
        } else {

            if (senha != confirmSenha) {
                res.status(400).json("A senha está incorreta");
                res.redirect("/register");
            }
            else if (senha == confirmSenha) {
                AddUser.create({
                    nome,
                    email,
                    senha
                }).then(function () {
                    console.log("Cadastrado com sucesso");
                    res.redirect('/login');
                }).catch(function (error) {
                    console.log("Erro ao cadastrar pesosa: " + error);
                })
            }
        }
    } catch (err) {
        console.error("Erro ao cadastrar pessoa: " + err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }


}


module.exports = {getCadastroUsuario,cadastrar};