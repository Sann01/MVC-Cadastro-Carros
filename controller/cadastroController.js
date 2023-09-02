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
    try {
        if (data.senha !== senha) {
            msgErro = "Senhas não são iguais";
            console.log("Senhas não são iguais");
            renderCadastroPage(res);
        } else if (data.nome === "" || data.email === "" || data.senha === "") {
            msgErro = "Todos os campos devem estar preenchidos!";
            renderCadastroPage(res);
        } else {
            data.senha = await bcrypt.hash(data.senha);

            console.log(data);

            const usuario = await usuarioModel.create(data);

            let token = jwt.sign({ email: usuario.email }, process.env.SECRET, {
                expiresIn: '86400000'
            });

            req.session.token = token;
            req.session.email = usuario.email;

            res.redirect('/cadastro');
        }
    } catch (error) {
        msgErro = "Usuário não pode ser cadastrado";
        console.log(error);
        renderCadastroPage(res);
    }
}

module.exports = { getCadastroUsuario, cadastro };
