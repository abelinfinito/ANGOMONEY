import { mainContainer } from "../../../main.js";
function Pagamentos(){
    mainContainer.innerHTML = pagamentosCard();
    mainContainer.querySelector("#voltarButton").addEventListener("click", ()=>{window.history.back()})
}
export default Pagamentos;

function pagamentosCard(){
return `
    <div class="topElemen">
        <button class="voltarButton" id="voltarButton"><i class="bi bi-arrow-left"></i></button>
    </div>
    <div class="all">
    <center>
    <p> O valor do depósito deve ser igual ao VIP desejado.</p>
    <label>OBS:</label>
    <p>caso tenha o Multicaixa express  ou BAI DIRECTO convém fazer <br> transferencia express ou BAI </p>
    <p> para que o valor reflete imediatamente na sua conta angomoney </p>
    <div class="deposit-method">
    <img src="/src/pages/img/express.png" alt="Logo Multicaixa Express">
    <h3>MULTICAIXA EXPRESS</h3>
    <BR>
    <h3>NUMERO</h3>
    <p>926240472</p>
    <h3>NOME</h3>
   <p>angomoney</p>  

</div>
<hr>
    <div class="deposit-method">
        <img src="/src/pages/img/bai.png" alt="Logo bic">
        <h3>BAI DIRECTO </h3>
        <BR>
        <h3>NUMERO</h3>
        <p>Indisponivel</p>
        <h3>NOME</h3>
        <p>ABEL.Q.ANTONIO</p>
    </div>
    <hr>
    <div class="deposit-method">
   <img src="/src/pages/img/bai.png" alt="Logo eco">
       <h3>BANCO BAI</h3>
       <BR>
       <h3>IBAN</h3>
       <p>INDISPONIVEL</p>
       <h3>NOME</h3>
       <p></p>
   
       </div>
    <hr>
    <div class="deposit-method">
    <img src="/src/pages/img/bic.png" alt="Logo Unitel Money">
    <h3>BANCO BIC</h3>
    <BR>
    <h3>IBAN</h3>
    <p></p>
    <h3>NOME</h3>
    <p></p>
</div>
<hr>
    <div class="deposit-method">
        <img src="/src/pages/img/atlantico.png" alt="Logo Unitel Money">
        <h3>BANCO Atlantico</h3>
        <BR>
        <h3>IBAN</h3>
        <p></p>
        <h3>NOME</h3>
        <p></p>
    </div>
     <hr>
    <div class="deposit-method">
        <img src="/src/pages/img/uni.jpg" alt="Logo Unitel Money">
        <h3>UNITEL MONEY</h3>
       <BR>
        <h3>NUMERO</h3>
        <p>942957859</p>
        <h3>NOME</h3>
        <p>MONEY</p>
    </div>
    <hr>
    <center>
    <a href="https://wa.me/244926240472?text=saudação+senhor+José+fiz+um+deposito+no+angomoney+e+este+é+o+meu+comprovativo+obrigado." target="_blank" rel="noopener noreferrer">ENVIAR O COMPROVATIVO</a>
    
    </div>
    `
}
