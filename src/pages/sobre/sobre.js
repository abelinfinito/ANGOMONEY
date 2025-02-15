import { mainContainer } from "../../../main.js";
function Sobre(params) {
    mainContainer.innerHTML = SobrePage();
    mainContainer.querySelector("#voltarButton").addEventListener("click", ()=>{window.history.back()});
}
export default Sobre;

function SobrePage() {
  return(
`   
    <section class="containerGeneral">
        <div class="topElemen">
            <button class="voltarButton" id="voltarButton"><i class="bi bi-arrow-left"></i></button>
        </div>
        <div style="background-color: #f0f0f0; border-radius: 10px; padding: 20px; margin: 10px;
            box-shadow: 0 4px    8px     rgba(0,0,0,0.1);">
            <h3 style="color: #333;">COMO FUNCIONA O INVESTIMENTO <i>ANGOMONEY</i></h3>
            <p>O investimento <i>AngoMoney</i> é um investimento a prazo com um curto período de tempo.</p>
            <p>Após o vencimento do prazo, o valor é transferido automaticamente para a conta bancária do usuário.</p>
            <p>cada dia que passa o  valor da sua conta aumenta consoante o vip que vc investiu, e não precisa esperar </p> 
            <p> o prazo terminar para sacar os valores da sua conta, podes sacar uma parte e depois deixar ele aumentar mais com os dias que te resta</p>  
           
            <h3 style="color: #333;">EM QUE ESTOU A INVESTIR ?</h3>
            <p>Você está investindo em negócios da ANGOMONEY.</p>

            <h3 style="color: #333;">QUE NEGÓCIOS SÃO ESTES ?</h3>
            <p>Nossa comunidade especializa-se em vários negócios, como:</p>
            <ul>
                <li>Vendas de livros digitais </li>
                <li>Vendas de criptomoedas</li>
               
                <li>Comercializamos varios produtos em toda parte do mundo </li>
            </ul>
        </div>
    </section>`
  )   
}