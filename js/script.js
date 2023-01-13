const btn = document.querySelector(".btn-menu");
const navegacion = document.querySelector(".navegacion");
const overlay = document.querySelector(".overlay");
const selectores = document.querySelectorAll("[data-theme]");
const luna = "🌙";

btn.addEventListener("click", ()=>{
    navegacion.classList.toggle("navegacion-active");
    overlay.classList.toggle("overlay-active");
})


document.addEventListener("DOMContentLoaded", () =>{
    if(localStorage.getItem("theme") === null) {localStorage.setItem("theme", "light");}

    if(localStorage.getItem("theme") === "light"){
        modoLight();
    }

    if(localStorage.getItem("theme") === "dark"){
        modoDark();
    }
})


document.addEventListener("click", (e) => {

    if(e.target.localName == "a"){
        navegacion.classList.toggle("navegacion-active");
        overlay.classList.toggle("overlay-active");
    }

    if(e.target.matches(".btn-theme-dark")){

        const sol = "🌞";
        const luna = "🌙";

        if(e.target.textContent === luna){
            modoDark();
            localStorage.setItem("theme", "dark");
            e.target.textContent = sol;
        }
        else{
            modoLight();
            e.target.textContent = luna;
            localStorage.setItem("theme", "light");
        }
    

    }

})

const modoDark = () => {
    selectores.forEach(element => {
        element.classList.add("modo-dark");
    });
}

const modoLight = () =>{
    selectores.forEach(element => {
        element.classList.remove("modo-dark");
    });
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
})

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



