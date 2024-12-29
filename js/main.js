$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira seu telefone',
            mensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function (form) {
            alert("Mensagem foi enviada, em breve entraremos em contato!");
            form.reset(); // Descomente se quiser resetar o formulário após envio
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha todos os campos");
        }
    });
});
