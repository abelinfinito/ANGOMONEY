import { mainContainer } from "../../../main.js";

function Services(){
    mainContainer.innerHTML = PageServices();
    mainContainer.querySelector("#voltarButton").addEventListener("click", ()=>{window.history.back()})
}
export default Services;
                     
function PageServices(){
    return(
        `
        <section class="containerGeneral serviceContainer">
            <div class="topElemen">
                <button class="voltarButton" id="voltarButton"><i class="bi bi-arrow-left"></i></button>
            </div>
            <div class="service-container">
                <h1>SERVIÇOS</h1>
                <ul class="instruction">Por favor, escolha o seu serviço</ul>
        
                <div class="service">
                    <h3>1</h3>
                    <h4>COMO FAZER LEVANTAMENTO</h4>
                    <p>Envie um SMS para o número 926240472 com as seguintes informações:</p>
                    <ul>
                        <li>Número: [seu número]</li>
                        <li>Senha: [sua senha]</li>
                        <li>Valor: [o valor que deseja levantar]</li><br>
                      
                    </ul>
                    <button class="send-button">Enviar</button><br>
                    <b>levantamento rapido</b>
                    <a href="https://wa.me/message/UXP2RUG7MF4RB1" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
                </div>
     
                <div class="service">
                    <h3>2</h3>
                    <h4>como cadastrar seu iban</h4>
                    <p>Envie um SMS para o número 926240472 com as seguintes informações:</p>
                    <ul>
                        <li>Número: [seu número]</li>
                        <li>Senha: [sua senha]</li>
                        <li>seu iban</li>
                    </ul>
                    <button class="send-button">Enviar</button>
                </div>
       
                <div class="service">
                    <h3>3</h3>
                    <h4>COMO ALTERAR A SUA SENHA</h4>
                    <p>Envie um SMS para o número 926240472 com as seguintes informações:</p>
                    <ul>
                        <li>Número: [seu número]</li>
                        <li>Senha: [sua senha]</li>
                        <li>Nova senha: [nova senha desejada]</li>
                    </ul>
                    <button class="send-button">Enviar</button><br>
                    <b>Alteração rapida</b>
            <a href="https://wa.me/message/UXP2RUG7MF4RB1" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
                </div>
            </div>
        </section>`
    )
}