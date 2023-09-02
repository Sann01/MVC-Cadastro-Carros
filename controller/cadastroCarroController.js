const cadastroCarro = [];

function getCadastroCarro(req, res) {
    res.render("cadastroCarro", { cadastroCarro });
}

module.exports = {getCadastroCarro};