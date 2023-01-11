const btn = document.querySelector(".btn-menu");
const navegacion = document.querySelector(".navegacion");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", ()=>{
    navegacion.classList.toggle("navegacion-active");
    overlay.classList.toggle("overlay-active");
})


document.addEventListener("click", (e) => {
    if(e.target.localName == "a"){
        navegacion.classList.toggle("navegacion-active");
        overlay.classList.toggle("overlay-active");
    }
})