import { mainContainer } from "../../../main.js";
import navigate from "../../../routes.js";
import { ErrorMessage } from "../../components/message.js";

function Login() {

    const serverURL = "../../src/server/server.json";
    
    mainContainer.innerHTML = LoginPage();
    const formData = mainContainer.querySelector("#formData");

    formData.addEventListener("submit", (e)=>{
        e.preventDefault();
    });

    let senButton = mainContainer.querySelector("#senButton");
    let demoButton = mainContainer.querySelector("#demoButton");
    
    senButton.addEventListener("click", async ()=>{ 

        let telefone = mainContainer.querySelector("#telefone").value;
        let password = mainContainer.querySelector("#password").value;

        try {
            let getData = await fetch(serverURL);
            if (getData.ok) {
                let [data] = await getData.json();
                
                data.users.forEach(element => {
                    if (element.telefone === telefone && element.senha === password) {
                        alert("Sucesso!");
                        console.log(element);
                        localStorage.setItem("session_token", element.id);
                        navigate("/home");
                    } else {
                        mainContainer.innerHTML = ErrorMessage("Dados e Senhas incorrectas!");
                        mainContainer.querySelector("#okButton").addEventListener("click", ()=>{
                            Login();
                        })
                    }
                });
            } else {
                console.error(getData.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    });

    demoButton.addEventListener("click", () => {
        mainContainer.querySelector("#telefone").value = "123456";
        mainContainer.querySelector("#password").value = "123456";
        senButton.click();
    });

    const voltarButton = mainContainer.querySelector('#voltarButton');
    voltarButton.onclick = ()=>{
        window.history.back();
    }
}
export default Login;

function LoginPage(params) {

    return(
        ` <section class="containerGeneral">
            <div class="topElemen">
                <button class="voltarButton" id="voltarButton"><i class="bi bi-arrow-left"></i></button>
            </div>
            <div class="contentWell">
                <i class="bi bi-cash-coin"></i>
                <h1>BEM-VINDO A ANGOMONEY</h1>
              
                <div class="formDataContainer">
                    <form action="#" id="formData">
                        <div class="inputBox">
                            <label for="telefone">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" placeholder="Seu telefone...">
                        </div>

                        <div class="inputBox">
                            <label for="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Sua senha...">
                        </div>

                        <div class="inputBox">
                            <button class="button" id="senButton">ENTRAR</button>
                        </div>

                        <div class="inputBox">
                            <button class="button" id="demoButton">Usar Conta Demo</button>
                        </div>
                       
                        <a href="https://wa.me/244942957859?text=Ola+senhor+Wiliam+esquece+a+minha+senha+de+acesso+angomoney+gostaria+de+recupera-la+obrigado🎉🎉🎉🎉🎉">Esqueceu a sua senha? </a>
                    </form>
                </div>  
          </section>
        `
    );
}