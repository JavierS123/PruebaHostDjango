const chatScrollbar = document.querySelector('.chat-scrollbar');
//Funcion para conectar la base de datos al input
$(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '',
            data: formData,
            success: function (response) {
                $('#chat-area').append('<div class="messages-container"><span class="user-messages">' + response.input_usuario + '</span><span class="automated-messages">' + response.resultado + '</span></div>');
                $('input[name="input_usuario"]').val('');
                chatScrollbar.scrollTop = chatScrollbar.scrollHeight;
            }
        });
    });
});
