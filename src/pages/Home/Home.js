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
                <div class="cartao-detalhes">
                    <span class="titulo">Telefone:</span>
                    <span class="valor">(+244) ${userData.telefone}</span>
                               
                </div>
                <div class="cartao-detalhes">
                    <span class="titulo">ID:</span>
                    <span class="valor">${userData.id}</span>
                </div>
            </div>
            
            
            <div class="cartao">
                <h5>DADOS DO PV</h5>
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
                <h5>ESTADO DE LEVANTAMENTO></h5>
                <BR>
                <div class="cartao-detalhes">
                    <span class="titulo">Valor do levantamento:</span>
                    <span class="valor">${userData.levantamento} KZ</span>
                </div>
                <div class="cartao-detalhes">
                    <span class="titulo">Estado:</span>
                    <span class="valor">${userData.estado} </span>
                </div>
            </div>

 <div class="cartao">
                <h5>DADOS CANCARIOS</h5>
                <BR>
                <div class="cartao-detalhes">
                    <span class="titulo">Dados bancarios:</span>
                    <span class="valor">${userData.nome} KZ</span>
                </div>
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
            
            <div id="LevantamentoButton">
                <i class="fa fa-download"></i>
                <span>Levantamento</span>
            </div>

            <div id="depositoButton">
                <i class="fa fa-bank"></i>
                <span>Deposito</span>
            </div>

            <div id="registroButton">
                <i class="fa fa-gift"></i>
                <span>Historico de retirada</span>
            </div>

            <div id="meuBancoButton">
            <i class="fa fa-book"></i>
                <span>Dados do PV</span>
            </div>

            <div id="meuVipButon">
                <i class="fa fa-mobile"></i>
                <span>Subir de Vip</span>
            </div>

            <div id="comissoesButton">
                <i class="fa fa-users"></i>
                <span>Convidar amigos</span>
            </div>

          
            
            <div id="subirVipButton">
                <i class="fa fa-lock"></i>
                <span>Sobre vip</span>
            </div>

            <div id="pagamentosButton">
                <i class="bi bi-cash-coin"></i>
                <span>Pagamentos</span>
            </div>

            <div id="logOutButton">
                <i class="fa fa-sign-out"></i>
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