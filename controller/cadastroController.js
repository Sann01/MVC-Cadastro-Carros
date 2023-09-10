const cadastroUsuario = [];

function getCadastroUsuario(req, res) {
    res.render('layouts/default/register', { cadastroUsuario });
}
function auth (req,res){
    if(req.body.senha != req.body.confirmSenha){
    res.redirect("layouts/default/register");
    
} 
else if(req.body.senha == req.body.confirmSenha){
    res.redirect("layouts/default/login");
    AddUser.create({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha
    }).then(function(){
        res.send("Cadastrado com sucesso!");
    }).catch(function(error){
        res.send("Erro ao efetuar o cadastro" + error); 
    })
}
}

module.exports = {getCadastroUsuario, auth};