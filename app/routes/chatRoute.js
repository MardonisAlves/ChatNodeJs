module.exports = function(applications){

applications.post('/chat' ,  function(req , res){
    applications.app.controllers.chatController.chat(applications ,req ,res);
});

applications.get('/chat' ,  function(req , res){
    res.render('chat');
});

}