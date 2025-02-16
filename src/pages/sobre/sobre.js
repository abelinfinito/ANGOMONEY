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
       <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
            display: flex;
            justify-content: center;
        }
        .content {
            background-color: #f0f0f0;
            border-radius: 10px;
            padding: 20px;
            max-width: 800px;
            width: 100%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h3 {
            color: #333;
        }
        p, ul {
            color: #555;
            line-height: 1.6;
        }
        ul {
            padding-left: 20px;
        }
        .info-icon {
            color: orange;
            margin-right: 5px;
        }
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            .content {
                padding: 15px;
            }
            h3 {
                font-size: 1.2em;
            }
            p, ul {
                font-size: 0.9em;
            }
        }
    </style>
</head>
<body>
    <div class="content">
        <h3><i class="fa fa-info-circle info-icon"></i> Como Funciona o Investimento na <i>AngoMoney</i></h3>
        <p>A <i>AngoMoney</i> é uma plataforma de investimento que permite que você faça seu dinheiro crescer de forma segura e dinâmica. Com um modelo baseado em investimentos digitais, oferecemos retornos diários ajustados ao nível VIP escolhido.</p>
        <p>Agora, com nossa nova parceria com a <i>AngoPay</i>, os usuários da <i>AngoMoney</i> podem investir diretamente em uma plataforma consolidada de pagamentos digitais.</p>
        <p>Saiba mais acessando: <a href="https://angopay.onrender.com" target="_blank">https://angopay.onrender.com</a></p>
        
        <h3><i class="fa fa-info-circle info-icon"></i> Em que Estou a Investir?</h3>
        <p>Ao investir na <i>AngoMoney</i>, você está apoiando e lucrando com os serviços financeiros da <i>AngoPay</i>, que facilita a compra e venda de dólares digitais.</p>
        <p>Confira a plataforma aqui: <a href="https://angopay.onrender.com" target="_blank">https://angopay.onrender.com</a></p>
        
        <h3><i class="fa fa-info-circle info-icon"></i> Que Negócios São Estes?</h3>
        <p>Nossos principais serviços incluem:</p>
        <ul>
            <li>Venda e compra de dólares digitais.</li>
            <li>Serviços financeiros para pagamentos online.</li>
            <li>Facilidade de transações para quem deseja investir e lucrar.</li>
        </ul>
        <p>Acesse agora: <a href="https://angopay.onrender.com" target="_blank">https://angopay.onrender.com</a></p>
    </div>
</body>
</html>
    </section>`
  )   
}