import navigate, { RenderContent } from "./routes.js";
export const mainContainer = document.getElementById('root');
document.addEventListener("DOMContentLoaded", ()=>{
    navigate("/home"); RenderContent();
})
window.addEventListener("hashchange", ()=>{
    RenderContent();
});