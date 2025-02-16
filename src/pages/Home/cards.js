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
            <h2>Escolha o VIP que deseja subir </h2>
             <h2> Quanto maior o vip maior será o seu ganho diario </h2>
            <ul class="litVip">
                <li class="titleList"><strong>CLIENTE VIP</strong></li>
               
                <li>CLIENTE VIP1 - 5.000 kwanzas/ -ganho diário 250 kwanzas prazo/ 60 DIAS GANHO TOTAL-15.000 KWANZAS</li>
                <li>CLIENTE VIP2 - 12.000 kwanzas/ -ganho diário 500 kwanzas prazo / 60 DIAS GANHO TOTAL-30.000 KWANZAS</li>
                <li>CLIENTE VIP3 - 25.000 kwanzas/ -ganho diário 1000 kwanzas prazo / 60 DIAS GANHO TOTAL-60.000 KWANZAS</li>
                <li>CLIENTE VIP4 - 85.000 kwanzas/ -ganho diário 3500 kwanzas prazo / 60 DIAS GANHO TOTAL-210.000 KWANZAS</li>
                 <li>CLIENTE VIP3 - 150.000 kwanzas/ -ganho diário 7000 kwanzas prazo / 60 DIAS GANHO TOTAL-420.000 KWANZAS</li>
                <li>CLIENTE VIP4 - 320.000 kwanzas/ -ganho diário 14.000 kwanzas prazo / 60 DIAS GANHO TOTAL-840.000 KWANZAS</li>
                <li>
                    <a href="https://wa.me/244926240472?text=Ola+senhor+Wiliam+gostaria+de+fazer+um+investimeno+e+este+é+o+meu+comprovativo+obrigado🎉🎉🎉🎉🎉"><button class="depositeButton" id="">Fazer o Deposito</button></a>
                </li>
            </ul>
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