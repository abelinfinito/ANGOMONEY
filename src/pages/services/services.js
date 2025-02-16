import { mainContainer } from "../../../main.js";

function Services(){
    mainContainer.innerHTML = PageServices();
    mainContainer.querySelector("#voltarButton").addEventListener("click", ()=>{window.history.back()})
}
export default Services;
                     
function PageServices(){
    return(
        `
        <section class="containerGeneral serviceContainer">
            <div class="topElemen">
                <button class="voltarButton" id="voltarButton"><i class="bi bi-arrow-left"></i></button>
            </div>
            <div class="service-container">
                <h1>SERVIÇOS</h1>
            </div>
        </section>`
    )
}