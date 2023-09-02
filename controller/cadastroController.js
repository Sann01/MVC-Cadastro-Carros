const cadastroUsuario = [];

function getCadastroUsuario(req, res) {
    res.render("layouts/default/login", { cadastroUsuario });
}

let msgErro = ""; // Declare a variável no escopo superior

function renderCadastroPage(res) {
    res.render("cadastro", { msgErro });
}

async function cadastro(req, res) {
    const data = req.body;
}
module.exports = { getCadastroUsuario, cadastro };