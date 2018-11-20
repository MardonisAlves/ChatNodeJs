var app = require('./config/server');
/*Porta de escuta*/

var server = app.listen(3000 , function(){
console.log("Servidor esta On");
});

var io = require('socket.io').listen(server);
app.set('io' , io);
/* criar a conexao websocket io*/
io.on('connection' , function(socket){
    console.log('Usuario conectado');

    socket.on('disconnect' ,function(){
    console.log('Usuario  Desconectou');
    });


socket.on('msmparaServidor' , function(data){

        socket.emit(
            'msgParaCliente' , 
            {nome: data.nome, mensagem: data.mensagem}
        );

        socket.broadcast.emit(
            'msgParaCliente' , 
            {nome: data.nome, mensagem: data.mensagem}
        );

        /*a tualizar a lista de participantes chta*/

        if(data.cliente_atualizado == 0){

        socket.emit(
            'participantesParaCliente' , 
            {nome: data.nome}
        );

        socket.broadcast.emit(
            'participantesParaCliente' ,
             {nome: data.nome}
            );
        }
    });

});


    

