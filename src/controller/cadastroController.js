const cadastroUsuario = [];
function getCadastroUsuario(req, res) {
    res.render('layouts/default/cadastro', { cadastroUsuario });
}

async function cadastro(req, res) {
    const data = req.body;
}
module.exports = { getCadastroUsuario, cadastro };