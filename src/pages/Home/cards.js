export function levantamentoCard() {
    return(

      
        
`       <div style="background-color: aquamarine;height:700px ;" class="card" id="levantamentoCard">
<form>
 <center>
 <h2>Levantamento</h2>
 
  <br><br>
   
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    a {
      text-decoration: none;
    }

    .botao-personalizado {
      display: inline-block;
      padding: 15px 30px;
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
      background: linear-gradient(135deg, #007bff, #0056b3);
      border: none;
      border-radius: 50px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .botao-personalizado:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }

    .botao-personalizado:active {
      transform: translateY(0);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <a href="levantamento.html" class="botao-personalizado">Fazer Levantamento</a>
  <br><br><br>






 <button class="close-button" id="closeLevantamentoButton">Fechar</button>

</div>`

    )
}

export function depositoCard() {
    return(
`        <div class="card" id="depositoCard">
            <h2>Como Fazer Depósito</h2>
            <p>Para fazer um depósito, siga os passos abaixo:</p>
            <ol>
                <li>Selecione o método de depósito desejado (BAI, BCI, Multicaixa Express, Unitel Money).</li>
                <li>Transfira o valor desejado para a conta correspondente:</li>
                <ul>
                    <li><strong>BAI:</strong> 004000001048279110128</li>
                    <li><strong>BCI:</strong> 000500006937168510197</li>
                    <li><strong>Multicaixa Express:</strong> 942957859</li>
                    <li><strong>Unitel Money:</strong> 926240472</li>
                </ul>
                <li>Envie o comprovativo de depósito para nosso WhatsApp<a href="https://wa.me/message/UXP2RUG7MF4RB1" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
            </ol>
            <button class="close-button" id="closedepositoCard">Fechar</button>
        </div>`
    )
}

export function registosCard(data) {
    let [user] = data;
    return(
`    <div class="card" id="registosCard">
      
 <style>
        body {
            font-family: Arial, sans-serif;
            
            background-color: #f9f9f9;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .content {
            background-color: #f0f0f0;
            border-radius: 10px;
            padding: 1px;
            margin: 1px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            width: 100%;
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
    
        <h3>Como Funciona o Investimento na <i>AngoMoney</i></h3>
        <p>A <i>AngoMoney</i> é uma plataforma de investimento inovadora que oferece aos angolanos oportunidades 
        financeiras seguras e diversificadas. Recentemente, estabelecemos uma parceria estratégica com a 
        <a href="https://angopay.onrender.com" target="_blank">https://angopay.onrender.com</a>, 
        uma plataforma de pagamentos online que visa atender às necessidades financeiras de usuários em países africanos 
        onde o acesso a serviços como PayPal e Wise é restrito.</p>
        
        <p>Com essa colaboração, os usuários da <i>AngoMoney</i> podem investir diretamente na 
        <a href="https://angopay.onrender.com" target="_blank">https://angopay.onrender.com</a>, 
        contribuindo para o crescimento e expansão dos serviços financeiros digitais na região. Essa sinergia fortalece 
        o ecossistema financeiro local e oferece aos investidores retornos atrativos, alinhados ao crescimento do mercado 
        de pagamentos digitais em Angola.</p>
        
        <p>Além disso, a <i>AngoMoney</i> disponibiliza uma variedade de produtos de investimento, incluindo a venda de dólares 
        americanos (USD), facilitando transações internacionais. Os investidores da <i>AngoMoney</i> podem comprar dólares diretamente na 
        <a href="https://angopay.onrender.com" target="_blank">https://angopay.onrender.com</a>, permitindo a diversificação de 
        seus portfólios com moeda forte e a proteção contra a volatilidade cambial.</p>
        
        <h3>Em que Estou a Investir?</h3>
        <p>Ao investir na <i>AngoMoney</i>, você está contribuindo para o crescimento e expansão da 
        <a href="https://angopay.onrender.com" target="_blank">https://angopay.onrender.com</a>, fortalecendo o ecossistema financeiro digital 
        em Angola e promovendo a inclusão financeira na região.</p>
        
        <h3>Que Negócios São Estes?</h3>
        <p>A <i>AngoPay</i> é especializada em fornecer soluções de pagamento seguras e eficientes, facilitando transações online e 
        ampliando o acesso a serviços financeiros internacionais para os angolanos.</p>
        
        <p>Ao escolher a <i>AngoMoney</i>, você não apenas diversifica suas opções de investimento, mas também participa ativamente da 
        modernização dos serviços financeiros em Angola.</p>
    
</body>
</html>

    










    
        <ol>
            
        <button class="close-button" id="closeregistosCard">Fechar</button>
     </div>`
    )
}


export function meuBancoCard(usuario = {}) {
    return (
        `<div class="card" id="meuBancoCard">
            <center>
                <h2>DADOS DO PV</h2>
                <p><strong>Nome:</strong> ${usuario.nome ?? "Não disponível"}</p>
                <p><strong>Telefone:</strong> ${usuario.telefone ?? "Não disponível"}</p>
                <p><strong>Saldo Disponível:</strong> ${usuario.saldo ?? 0} KZ</p>
                <p><strong>Levantamento:</strong> ${usuario.levantamento ?? 0} KZ</p>
                <p><strong>Estado do Levantamento:</strong> ${usuario.estadoLevantamento ?? "Não disponível"}</p>
            </center>
            <button class="close-button" id="closemeuBancoCard">Fechar</button>
        </div>`
    );
}


export function meuVIPCard() {
    return (
        `<div class="card" id="meuVIPCard">
          
<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 20px;
            color: #333;
        }

        h1 {
            color: #4CAF50;
            text-align: center;
            margin-bottom: 20px;
        }

        p {
            text-align: center;
            color: #666;
            font-size: 16px;
            margin-bottom: 40px;
        }

        .vip-list {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .vip-item {
            background-color: #fff;
            padding: 20px;
            margin: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
            transition: transform 0.3s ease-in-out;
        }

        .vip-item:hover {
            transform: scale(1.05);
        }

        .vip-item h3 {
            margin: 0;
            color: #FF5722;
            font-size: 24px;
        }

        .vip-item p {
            margin: 10px 0;
            font-size: 16px;
            color: #444;
        }

        .vip-item .depositeButton {
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        .vip-item .depositeButton:hover {
            background-color: #45a049;
        }

        .vip-item .vip-price {
            color: #3F51B5;
            font-weight: bold;
            font-size: 18px;
        }

        @media (max-width: 768px) {
            .vip-item {
                width: 90%;
                margin: 10px;
            }
        }

        @media (max-width: 480px) {
            h1 {
                font-size: 24px;
            }

            .vip-item h3 {
                font-size: 20px;
            }

            .vip-item p {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>

    <h1>Escolha o VIP que deseja investir</h1>
    <p>Escolha o seu VIP e veja o quanto pode ganhar investindo em dólares. O lucro total será 4 vezes o valor investido, com ganho diário dividido em 60 dias.</p>

    <ul class="vip-list">
        <!-- VIP 1 -->
        <li class="vip-item">
            <h3>CLIENTE VIP1</h3>
            <p class="vip-price">Investimento: 5 USD (5 x 1150 Kz = 5750 Kz)</p>
            <p>Ganho diário: 250 Kz</p>
            <p>Prazo: 60 dias</p>
            <p>Ganho Total: 15.000 Kz</p>
            <a href="https://wa.me/244926240472?text=Ola+senhor+Wiliam+gostaria+de+fazer+um+investimeno+e+este+é+o+meu+comprovativo+obrigado🎉🎉🎉🎉🎉">
                <button class="depositeButton">Fazer o Depósito</button>
            </a>
        </li>

        <!-- VIP 2 -->
        <li class="vip-item">
            <h3>CLIENTE VIP2</h3>
            <p class="vip-price">Investimento: 15 USD (15 x 1150 Kz = 17.250 Kz)</p>
            <p>Ganho diário: 500 Kz</p>
            <p>Prazo: 60 dias</p>
            <p>Ganho Total: 30.000 Kz</p>
            <a href="https://wa.me/244926240472?text=Ola+senhor+Wiliam+gostaria+de+fazer+um+investimeno+e+este+é+o+meu+comprovativo+obrigado🎉🎉🎉🎉🎉">
                <button class="depositeButton">Fazer o Depósito</button>
            </a>
        </li>

        <!-- VIP 3 -->
        <li class="vip-item">
            <h3>CLIENTE VIP3</h3>
            <p class="vip-price">Investimento: 29 USD (29 x 1150 Kz = 33.350 Kz)</p>
            <p>Ganho diário: 1000 Kz</p>
            <p>Prazo: 60 dias</p>
            <p>Ganho Total: 60.000 Kz</p>
            <a href="https://wa.me/244926240472?text=Ola+senhor+Wiliam+gostaria+de+fazer+um+investimeno+e+este+é+o+meu+comprovativo+obrigado🎉🎉🎉🎉🎉">
                <button class="depositeButton">Fazer o Depósito</button>
            </a>
        </li>

        <!-- VIP 4 -->
        <li class="vip-item">
            <h3>CLIENTE VIP4</h3>
            <p class="vip-price">Investimento: 40 USD (40 x 1150 Kz = 46.000 Kz)</p>
            <p>Ganho diário: 3.500 Kz</p>
            <p>Prazo: 60 dias</p>
            <p>Ganho Total: 210.000 Kz</p>
            <a href="https://wa.me/244926240472?text=Ola+senhor+Wiliam+gostaria+de+fazer+um+investimeno+e+este+é+o+meu+comprovativo+obrigado🎉🎉🎉🎉🎉">
                <button class="depositeButton">Fazer o Depósito</button>
            </a>
        </li>

        <!-- VIP 5 -->
        <li class="vip-item">
            <h3>CLIENTE VIP5</h3>
            <p class="vip-price">Investimento: 85 USD (85 x 1150 Kz = 97.750 Kz)</p>
            <p>Ganho diário: 7.000 Kz</p>
            <p>Prazo: 60 dias</p>
            <p>Ganho Total: 420.000 Kz</p>
            <a href="https://wa.me/244926240472?text=Ola+senhor+Wiliam+gostaria+de+fazer+um+investimeno+e+este+é+o+meu+comprovativo+obrigado🎉🎉🎉🎉🎉">
                <button class="depositeButton">Fazer o Depósito</button>
            </a>
        </li>
    </ul>

</body>








            <div class="divButtons">
                <button class="close-button" id="closemeuVIPCard">Fechar</button>
            </div>
            </div>`
    )
}


export function minhasComissoesCard() {
    
    return(
        `<div class="card" id="minhasComissoesCard">
            <h2>Como convidar amigo</h2>
            <b>Para convidar um amigo copia o seu link de convite:</b>
            <ol>
                <li>copia o link abaixo</li>
                <i style="color: #3498db;">angomoney.netlify.app</i>
                <li>Basta enviar este link para os seus amigos e vc ganhará uma </li>
                <li>recompesa de 20% do valor que eles vão envestir </li>
            </ol>
            <button class="close-button" id="minhasComissoesCard">Fechar</button>
        </div>`
    )
}

export function subirDeVipCard() {
    
    return(
 `       <div class="card" id="subirDeVipCard">
           
 
   
    <button class="close-button" id="closeSubirVipCard">Fechar</button>
</div>`



    )
}