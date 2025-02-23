import { mainContainer } from "../../../main.js";
import navigate from "../../../routes.js";

function Wellcome() {
    mainContainer.innerHTML = wellCamePAge();

    const buttonLogin = mainContainer.querySelector("#logButton");

    buttonLogin.addEventListener("click", () => {
        navigate("/login");
    });
}

export default Wellcome;

function wellCamePAge() {
    return `
        <style>
            .buttonStyled, .custom-link {
                display: inline-block;
                padding: 10px 20px;
                margin: 5px;
                text-align: center;
                text-decoration: none;
                background-color:rgb(97, 97, 187); /* Cor do botão */
                color: white; /* Cor do texto branca */
                border-radius: 5px;
                font-size: 16px;
                transition: 0.3s;
            }

            .buttonStyled:hover, .custom-link:hover {
                background-color:rgb(39, 39, 61);
            }

            /* Para garantir que todos os links tenham a cor branca */
            .custom-link {
                color: white !important;
            }
        </style>

        <section class="containerGeneral">
            <div class="contentWell">
                <h1>ANGOMONEY</h1>
                <br>
                <i class="bi bi-cash-coin"></i>
                <br>
                <span>
                    <a href="https://wa.me/244926240472" class="custom-link">Suporte</a>
                </span>
                <br>
                <div class="buttonsLog">
                    <button id="logButton" class="buttonStyled">Entrar</button>
                    <a href="cadastro.html" class="custom-link">Registrar-se</a>
                </div>
                
                <br>
                <a href="https://chat.whatsapp.com/CMBCIWs4L5eK89lcELvBYu" class="custom-link">Entrar no grupo</a>
                 <br>
                <a href="suporte.html" class="custom-link">Cliente especial</a>
                <br><br>
                <a href="ANGOMONEY (1).apk" download class="custom-link">Descarregar APK da Angomoney</a>
            </div>
        </section>
    `;
}
