let campoSenha = document.querySelector('input[id="senha"]');
let campoConfirmarSenha = document.querySelector('input[id="repetir"]');
let botao = document.querySelector('.frm-botao');

campoSenha.addEventListener('input', function(){
  verificaCampos();
});

campoConfirmarSenha.addEventListener('input', function(){
  verificaCampos();
});

function verificaCampos() {
  if(campoSenha.value == campoConfirmarSenha.value && campoSenha.value.length >2)
   alert("Os numeros correspondem clica no fazer levantamento"),
    botao.disabled = false;
  else
    botao.disabled = true;
    botao.backgrancolor=red;
}





  
