import { mainContainer } from "../../../main.js";
import navigate from "../../../routes.js";
function Wellcome(){
    mainContainer.innerHTML = wellCamePAge();
    const buttonLogin = mainContainer.querySelector("#logButton");
    const cadastroButton = mainContainer.querySelector("#cadastroButton");
    buttonLogin.addEventListener("click", ()=>{
        navigate("/login");
    })
    cadastroButton.addEventListener("click", ()=>{
        navigate("/cadastro");
    })
}
export default Wellcome;

function wellCamePAge(params) {
    return(
        
        `<section class="containerGeneral">
    
            <div class="contentWell">
                    
            <h1>ANGOMONEY</h1> 
                
            <br>    
       
            <i class="bi bi-cash-coin"></i>
 
                <span></span><br>
                <a href="https://wa.me/926240472">Suporte</a>

                <div class="buttonsLog">
                    <button id="logButton">Entrar</button>
                   

  <a href="cadastro.html" class="custom-link">
     Registrar-se
</a>








          


                </div>
                <a href="whatsapp.html" class="custom-link">receber dados de login no whatsapp</a>
                <br>
                <span>Juntar-se ao grupo dos investidores  </span><br>
               <span><a href="https://chat.whatsapp.com/CMBCIWs4L5eK89lcELvBYu"target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a> </span><br>
               
               
               
                    <br>
                    <br>
                     <a href="angopay.apk" download>descaregar apk da angomoney</a>

            </div>
        
           
        </section>
        `
    );
}
