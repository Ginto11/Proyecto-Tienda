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

console.log(categorias)


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



