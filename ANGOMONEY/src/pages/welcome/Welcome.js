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
 
             <br>
             <span>
  <a href="https://wa.me/244926240472" rel="noopener noreferrer">suporte</i>
  </a>
</span><br>
   

                <div class="buttonsLog">
                    <button id="logButton">Entrar</button>
                    
                   

  <a href="cadastro.html" class="custom-link">
     Registrar-se
</a>








          


                </div>
                <a href="whatsapp.html" class="custom-link">receber dados de login no whatsapp</a>
                <br>
               <a href="https://chat.whatsapp.com/CMBCIWs4L5eK89lcELvBYu">Entrar no grupo</a>

               
               
                    <br>
                    <br>
                       <a href="ANGOMONEY (1).apk" download>descaregar apk da angomoney</a>

            </div>
        
           
        </section>
        `
    );
}
