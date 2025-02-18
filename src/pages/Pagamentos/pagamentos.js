import { mainContainer } from "../../../main.js";
function Pagamentos(){
    mainContainer.innerHTML = pagamentosCard();
    mainContainer.querySelector("#voltarButton").addEventListener("click", ()=>{window.history.back()})
}
export default Pagamentos;

function pagamentosCard(){
return `
    <div class="topElemen">
        <button class="voltarButton" id="voltarButton"><i class="bi bi-arrow-left"></i></button>
    </div>
 <br><br>
  <style>
   
    }
    .container {
      width: 100%;
      max-width: 900px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 8px;
      padding: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .header h1 {
      color: #333;
      font-size: 24px;
    }
    .header p {
      color: #666;
      font-size: 16px;
    }
    .deposit-methods {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-around;
    }
    .method {
      background-color: #f4f4f4;
      border-radius: 8px;
      width: 220px;
      padding: 15px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    .method:hover {
      transform: scale(1.05);
    }
    .method img {
      max-width: 80px;
      margin-bottom: 15px;
    }
    .method h3 {
      color: #333;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .method p {
      color: #555;
      font-size: 16px;
    }
    .method button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 8px 15px;
      margin-top: 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .method button:hover {
      background-color: #0056b3;
    }
    .notice {
      color: #e74c3c;
      font-weight: bold;
      text-align: center;
      margin-top: 20px;
    }
    .whatsapp-link {
      display: block;
      text-align: center;
      margin-top: 20px;
      text-decoration: none;
      background-color: #25d366;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }
    .whatsapp-link:hover {
      background-color: #128c7e;
    }
  </style>
  <script>
    function copyText(id) {
      const copyText = document.getElementById(id);
      navigator.clipboard.writeText(copyText.innerText).then(() => {
        alert('Número copiado para a área de transferência!');
      });
    }
  </script>
</head>


<div class="container">
  <div class="header">
    <h1>Detalhes do Depósito</h1>
    <p>O valor do depósito deve ser igual ao VIP desejado.</p>
    <p>Para uma transferência mais rápida, use Multicaixa Express ou BAI DIRECTO.</p>
  </div>

  <div class="deposit-methods">
    <!-- Multicaixa Express -->
    <div class="method">
      <img src="/src/pages/img/express.png" alt="Logo Multicaixa Express">
      <h3>MULTICAIXA EXPRESS</h3>
      <p id="num-multicaixa">926240472</p>
    
    </div>

    <!-- BAI DIRECTO -->
    <div class="method">
      <img src="/src/pages/img/bai.png" alt="Logo BAI Directo">
      <h3>BAI DIRECTO</h3>
      <p id="num-bai">Indisponível</p>
      
    </div>

    <!-- Banco BAI -->
    <div class="method">
      <img src="/src/pages/img/bai.png" alt="Logo Banco BAI">
      <h3>BANCO BAI</h3>
      <p id="iban-bai">Indisponível</p>
      
    </div>

    <!-- Banco BIC -->
    <div class="method">
      <img src="/src/pages/img/bic.png" alt="Logo Banco BIC">
      <h3>BANCO BIC</h3>
      <p>Indisponível</p>
     
    </div>

    <!-- Banco Atlântico -->
    <div class="method">
      <img src="/src/pages/img/atlantico.png" alt="Logo Banco Atlântico">
      <h3>BANCO ATLANTICO</h3>
      <p id="iban-atlantico">Indisponível</p>
      
    </div>

    <!-- Unitel Money -->
    <div class="method">
      <img src="/src/pages/img/uni.jpg" alt="Logo Unitel Money">
      <h3>UNITEL MONEY</h3>
      <p id="num-unitel">942957859</p>
     
    </div>
  </div>

  <div class="notice">
    <p>Certifique-se de que os dados estão corretos antes de fazer o depósito.</p>
  </div>

  <a class="whatsapp-link" href="https://wa.me/244926240472?text=saudação+senhor+José+fiz+um+deposito+no+angomoney+e+este+é+o+meu+comprovativo+obrigado." target="_blank" rel="noopener noreferrer">ENVIAR O COMPROVATIVO</a>
</div>

<br><br><br><br><br><br><br>
</html>








    
    </div>
    `
}
