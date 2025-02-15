import Cadastro from "./src/pages/Cadastro/cadastro.js";
import Home from "./src/pages/Home/Home.js";
import Login from "./src/pages/Login/Login.js";
import Pagamentos from "./src/pages/Pagamentos/pagamentos.js";
import Services from "./src/pages/services/services.js";
import Sobre from "./src/pages/sobre/sobre.js";
import Wellcome from "./src/pages/welcome/Welcome.js";
function navigate(path) {
    window.location.hash = path;
}
export default navigate;
export function sessionControll(){
    let token = localStorage.getItem("session_token");
    if (token !== "") {
        navigate("/home");
    } else{
        navigate("/");
    }
}
export function RenderContent(){
    let route = window.location.hash.substring(1);
    switch (route) {
        case "/":
            Wellcome();
            break;
        case "/login":
            Login();
            break;

            case "/cadastro":
                Cadastro();
                break;

            case "/home":
                Home();
                break;

            case "/sobre":
                Sobre();
                break;
                
            case "/servicos":
                Services();
                break;     
            case "/pagamentos":
                Pagamentos();
                break;
        default:
            navigate("/home");
            break;
    }
}