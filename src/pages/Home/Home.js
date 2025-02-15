import { mainContainer } from "../../../main.js";
import navigate, { sessionControll } from "../../../routes.js";
import { ErrorMessage } from "../../components/message.js";
import { depositoCard, levantamentoCard, meuBancoCard, meuVIPCard, minhasComissoesCard, registosCard, subirDeVipCard } from "./cards.js";

async function Home() { 

    const id = parseInt(localStorage.getItem("session_token"));


        try {
            let getData = await fetch("../../src/server/server.json");
            if(getData.ok){
                let [data] = await getData.json();
                var dataUser = data.users.filter(element=> element.id === id);
                homePage(dataUser);
            } else{
                mainContainer.innerHTML = ErrorMessage(getData.statusText);
                mainContainer.querySelector("#okButton").addEventListener("click", ()=>{window.location.reload()}) 
            }
           } catch (error) {
                navigate("/");
           }

    function homePage(props){
        mainContainer.innerHTML = ViewHome(props);
        ///////////////------------Nav buttons 
        const aboutButton  = mainContainer.querySelector("#aboutButton");
        aboutButton.addEventListener("click", ()=>{
            navigate("/sobre");
        });
        const homeButton  = mainContainer.querySelector("#homeButton");
        homeButton.addEventListener("click", ()=>{
            Home();
        });
        
        const reloadButton  = mainContainer.querySelector("#reloadButton");
        reloadButton.addEventListener("click", ()=>{
            window.location.reload();
        });
        const refreshButton  = mainContainer.querySelector("#refreshButton");
        refreshButton.addEventListener("click", ()=>{
            navigate("/servicos");
        });
        //////////////////-----------Buttons Card
        mainContainer.querySelector("#LevantamentoButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = levantamentoCard();
            mainContainer.querySelector("#closeLevantamentoButton").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#depositoButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = navigate("/pagamentos");
            mainContainer.querySelector("#closedepositoCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#registroButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = registosCard(dataUser);
            mainContainer.querySelector("#closeregistosCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#meuBancoButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = meuBancoCard();
            mainContainer.querySelector("#closemeuBancoCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#meuVipButon").addEventListener("click", ()=>{
            mainContainer.innerHTML = meuVIPCard();
            mainContainer.querySelector("#closemeuVIPCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#comissoesButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = minhasComissoesCard();
            mainContainer.querySelector("#minhasComissoesCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#subirVipButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = subirDeVipCard();
            mainContainer.querySelector("#closeSubirVipCard").addEventListener("click", ()=>{Home()});
        });
        
        mainContainer.querySelector("#pagamentosButton").addEventListener("click", ()=>{
            navigate("/pagamentos");
        });

        mainContainer.querySelector("#logOutButton").addEventListener("click", ()=>{
            localStorage.removeItem("session_token");
            navigate("/");
        })
    }
}
export default Home;

function ViewHome(user) {
    var [userData] = user;

    return(
        `<div class="container">
        <div class="header">
            <div class="user-info">
              <div class="numero">

                  </div>
                    
               
               
             
                      
                  
               
                </div>
                <br>
                <h4>SEUS CARTOES</h4>
                   <style>
     
        }
        .carousel-container {
            width:100px;
            overflow: hidden;
            position: relative;
        }
        .carousel {
            display: flex;
            scroll-snap-type: x mandatory;
            overflow-x: auto;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
        }
        .cartao {
           flex: 0 0 90%; /* Antes estava 100%, agora está 80% */
            scroll-snap-align: start;
            background: linear-gradient(135deg, #4A00E0, #8E2DE2);
            color: white;
            border-radius: 15px;
          
           margin-right: 10px; /* Espaçamento lateral, útil se for um carrossel */
            padding: 8px;
            text-align: left;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            font-family: Arial, sans-serif;
        }
        .cartao-detalhes {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .titulo {
            font-weight: bold;
        }
        .valor {
            font-size: 16px;
        }
    </style>


    <div class="carousel-container">
        <div class="carousel">
            <div class="cartao">
                <h5>DADOS DO USUÁRIO</h5>
                <br>
                <div class="cartao-detalhes">
                    <span class="titulo">Telefone:</span>
                    <span class="valor">(+244) ${userData.telefone}</span>
                               
                </div>
                <br>
                <div class="cartao-detalhes">
                    <span class="titulo">ID:</span>
                    <span class="valor">${userData.id}</span>
                </div>
            </div>
            
            
            <div class="cartao">
            
                <h5>DADOS DO PV</h5>
                
                <br>
                <div class="cartao-detalhes">
                    <span class="titulo">PV:</span>
                    <span class="valor">${userData.pv}</span>
                </div>
                <div class="cartao-detalhes">
                    <span class="titulo">Renda diaria:</span>
                    <span class="valor">${userData.ganhodiario} kz</span>
                </div>
              <div class="cartao-detalhes">
                    <span class="titulo">Ganho total:</span>
                    <span class="valor">${userData.ganhototal} kz</span>
                </div>
              
                
            </div>
            <div class="cartao">
                <h5>ESTADO DE LEVANTAMENTO</h5>
                <BR>
                <div class="cartao-detalhes">
                    <span class="titulo">Valor do levantamento:</span>
                    <span class="valor">${userData.levantamento} KZ</span>
                </div>
                <br>
                <div class="cartao-detalhes">
                    <span class="titulo">Estado:</span>
                    <span class="valor">${userData.estado} </span>
                </div>
            </div>

 <div class="cartao">
                <h5>DADOS BANCARIOS</h5>
                <BR>
                <div class="cartao-detalhes">
                    <span class="titulo">Nome:</span>
                    <span class="valor">${userData.nome}</span>
                </div>
                <br>
                <div class="cartao-detalhes">
                    <span class="titulo">IBAN:</span>
                    <span class="valor">${userData.iban} </span>
                </div>
            </div>
            
        </div>
    </div>


 
         <br>



            </div>
        </div>
        <div class="menu">
            
            <div id="LevantamentoButton"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 120px; text-align: center;">
                <i class="fa fa-download"style="color: orange;"></i>
                <span>Levantamento</span>
            </div>

            <div id="depositoButton"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 100px; text-align: center;">
                <i class="fa fa-bank"style="color: orange;"></i>
                <span>Deposito</span>
            </div>

            <div id="registroButton"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 100px; text-align: center;">
                <i class="fa fa-gift"style="color: orange;"></i>
                <span>Historico de retirada</span>
            </div>

            <div id="meuBancoButton"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 100px; text-align: center;">
            <i class="fa fa-book"style="color: orange;"></i>
                <span>Dados do PV</span>
            </div>

            <div id="meuVipButon"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 100px; text-align: center;">
                <i class="fa fa-mobile"style="color: orange;"></i>
                <span>Subir de Vip</span>
            </div>

            <div id="comissoesButton"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 100px; text-align: center;">
                <i class="fa fa-users"style="color: orange;"></i>
                <span>Convidar amigos</span>
            </div>

          
            
            <div id="subirVipButton"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 100px; text-align: center;">
                <i class="fa fa-lock"style="color: orange;"></i>
                <span>Sobre vip</span>
            </div>

            <div id="pagamentosButton"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 100px; text-align: center;">
                <i class="bi bi-cash-coin"style="color: orange;"></i>
                <span>Pagamentos</span>
            </div>

            <div id="logOutButton"style="border: 0.1px solid rgba(0, 255, 13, 0.5); padding: 5px; border-radius: 10px; width: 100px; text-align: center;">
                <i class="fa fa-sign-out"style="color: orange;"></i>
                <span>Sair</span>
            </div>

        </div>
      
        <div class="footer">
            <i class="bi bi-house-fill" id="homeButton"></i>
            <i class="bi bi-arrow-repeat" id="reloadButton"></i>
            <i class="bi bi-journal-medical" id="refreshButton"></i>
            <i class="bi bi-exclamation-lg" id="aboutButton"></i>
        </div>
    </div>`
    )
}