import { mainContainer } from "../../../main.js";
function Cadastro() {
    mainContainer.innerHTML = CadastroView();
    const voltarButton = mainContainer.querySelector("#voltarButton");
    voltarButton.addEventListener("click", ()=>{
        window.history.back();
    })
}
export default Cadastro;

function CadastroView(){
    return(
       ` <section class="containerGeneral dadastroContainer">
            <div class="topElemen">
                <button class="voltarButton" id="voltarButton"><i class="bi bi-arrow-left"></i></button>
            </div>
            <br>
            <img width:8px; src="/src/pages/img/dinheiro.png" alt="dinheiro">
            <h3>BEM-VINDO <h3>
            <h3> CRIA A SUA CONTA AGORA</h3>
            
    

                      
            </div>
        </section>`
    );
}
