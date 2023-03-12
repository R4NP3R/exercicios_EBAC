$(document).ready(function(){
$('body').on('click','#tasks',function(){
    $('p').css({"text-decoration" : "line-through","border-bottom" : "none"});
});
$('form').on('submit', function(e){
    e.preventDefault();
    
    
    const novaTarefa = $('ul');
    const listaDeTarefas = $('#form-atividade').val();
    const linhaTarefas = $('<li></li>').appendTo(novaTarefa);    
    
    $(linhaTarefas).html(`<p id="tasks">${listaDeTarefas}</p>`)
    
    $('#listaDeTarefas').val(''); 
})

})


