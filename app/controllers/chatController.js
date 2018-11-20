module.exports.chat = function(applications ,req ,res){
    var dadoForm = req.body;
    console.log(dadoForm);
    req.assert('nome' , 'O Apelido Nao Pode ser Vazio').notEmpty();
    req.assert('nome' , 'O Apelido tem ter enter 3 a 10 Caracteres').len(4, 10);

    var errors = req.validationErrors();

    if(errors){
        res.render('index', {validacao: errors});
        return;
    }

    applications.get('io').emit(
                        'msgParaCliente',
                        {nome : dadoForm.nome ,  mensagem : 'Acabou de netrar no chat'}                    );

    res.render('chat', {dadoForm :  dadoForm});
}