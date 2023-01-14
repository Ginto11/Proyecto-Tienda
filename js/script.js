const btn = document.querySelector(".btn-menu");
const navegacion = document.querySelector(".navegacion");
const overlay = document.querySelector(".overlay");
const selectores = document.querySelectorAll("[data-theme]");
const luna = "🌙";

btn.addEventListener("click", ()=>{
    navegacion.classList.toggle("navegacion-active");
    overlay.classList.toggle("overlay-active");
});

document.addEventListener("scroll", (e) => {

    let scrollValue = document.documentElement.scrollTop;

    const btnScrollTop = document.querySelector(".btn-scroll-top");

    if(scrollValue > 300){

        btnScrollTop.classList.add("btn-scroll-top-active");

    }else {
        
        btnScrollTop.classList.remove("btn-scroll-top-active");
    }
})


document.addEventListener("DOMContentLoaded", () =>{

    if(localStorage.getItem("theme") === null) {localStorage.setItem("theme", "light");}

    if(localStorage.getItem("theme") === "light"){
        modoLight();
    }

    if(localStorage.getItem("theme") === "dark"){
        modoDark();
    }
});


document.addEventListener("click", (e) => {

    if(e.target.localName == "a"){
        navegacion.classList.toggle("navegacion-active");
        overlay.classList.toggle("overlay-active");
    }

    if(e.target.matches(".btn-theme-dark")){

        if(e.target.textContent === luna){
            modoDark();
        }
        else{
            modoLight();
        }
    }

    if(e.target.matches(".btn-scroll-top")){

        document.documentElement.scrollTo({
            behavior: "smooth",
            top: 80 
        });

    };

});

const modoDark = () => {
    selectores.forEach(element => {
        element.classList.add("modo-dark");
    });
    localStorage.setItem("theme", "dark");
    document.querySelector(".btn-theme-dark").textContent = "🌞";
}

const modoLight = () =>{
    selectores.forEach(element => {
        element.classList.remove("modo-dark");
    });
    document.querySelector(".btn-theme-dark").textContent = "🌙";
    localStorage.setItem("theme", "light");
}


const categorias = {
    hombres: [
        {nombre: "Pantalon", color: "Negro", costo: 34000}
    ],
    mujeres: [
        {nombre: "Blusa", color: "Azul", costo: 45000} 
    ],
    niños: [
        {nombre: "Gorro", color: "Rojo", costo: 14000}
    ]
};

const {hombres, mujeres, niños} = categorias;

document.getElementById("filtro-categorias").addEventListener("change", (e)=>{

    if(e.target.value === "mujeres"){
        mostrarDatos(mujeres);
    }

    if(e.target.value == "hombres"){
        mostrarDatos(hombres);
    }

    if(e.target.value == "niños"){
        mostrarDatos(niños);
    }
});


function mostrarDatos(data){
    let lista = "";
    data.forEach(element => {
        lista += 
        `<ul>
            <li> ${element.nombre} </li>
            <li> ${element.color} </li>
            <li> ${element.costo} </li>
         </ul>
        `
    });

    document.querySelector(".contenedor-productos-filtro").innerHTML = lista;
}



