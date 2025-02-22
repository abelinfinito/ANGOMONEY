let campoSenha = document.querySelector('input[id="senha"]');
let campoConfirmarSenha = document.querySelector('input[id="repetir"]');
let botao = document.querySelector('.frm-botao');

campoSenha.addEventListener('input', function() {
  verificaCampos();
});

campoConfirmarSenha.addEventListener('input', function() {
  verificaCampos();
});

function verificaCampos() {
  if (campoSenha.value === campoConfirmarSenha.value && campoSenha.value.length > 2) {
    alert("As senhas correspondem. Você pode clicar no botão 'Cadastrar-se'.");
    botao.disabled = false;
    botao.style.backgroundColor = ''; // Reseta a cor de fundo do botão
  } else {
    botao.disabled = true;
    botao.style.backgroundColor = 'red'; // Define a cor de fundo do botão como vermelho
  }
}




  
