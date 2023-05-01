

$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const inputNomeTarefa = $('#nome-tarefa').val();
        const newItem = $('<li style="list-style: circle"></li>');
        $(`<span>${inputNomeTarefa}</span>`).appendTo(newItem);
        $(newItem).appendTo('ul');

        $('#nome-tarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    })

})