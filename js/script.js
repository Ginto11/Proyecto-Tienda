const btn = document.querySelector(".btn-menu");
const navegacion = document.querySelector(".navegacion");
const overlay = document.querySelector(".overlay");
const selectores = document.querySelectorAll("[data-theme]");
const luna = "🌙";

const categorias = {
    hombres: [
        {nombre: "pantalon", imagen: "./productos/hombres/pantalon-para-moto.jpg", descripcion: "Pantalon de color negro para motos e impermeable y de talla 32.", costo: 34000},
        {nombre: "tenis", imagen: "./productos/hombres/tenis-blancos.png", descripcion: "Tenis de color blanco, y de la mejor calidad posible, de talla 39.", costo: 60000},
        {nombre: "camisa", imagen: "./productos/hombres/camisa-azul.jpg", descripcion: "Camisa azul de tela y de color azul, talla S.", costo: 15000},
        {nombre: "gafas", imagen: "./productos/hombres/gafas.png", descripcion: "Gafas transition de color negro y con filtro de luz azul.", costo: 150000},
        {nombre: "medias", imagen: "./productos/hombres/medias-azules.png", descripcion: "Medias de color azules, para adultos y tipo bota recta.", costo: 70000}
    ],
    mujeres: [
        {nombre: "blusa", imagen: "./productos/mujeres/blusa-blanca.png", descripcion: "Blusa de color blanco con corazones de color negrom y azul talla S.", costo: 45000},
        {nombre: "secador", imagen: "./productos/mujeres/secador-rojo.png", descripcion: "Secador de cabello de color rojo, profesional que te dara la posibilidad de tener el mejor look", costo: 230000},
        {nombre: "plancha", imagen: "./productos/mujeres/plancha-negra.png", descripcion: "Plancha de color negro, para alisar todo tipo de cabello y con temperatura graduable.", costo: 140000},
        {nombre: "tacones", imagen: "./productos/mujeres/tacones-azules.png", descripcion: "Tacones azules con diseños de color amarillo, estan echos en cuero de buena calidad.", costo: 175000},
        {nombre: "brasier", imagen: "./productos/mujeres/brasier-negro.png", descripcion: "Brasier de color negro", costo: 20000}
    ],
    niños: [
        {nombre: "gorro", imagen: "./productos/niños/gorro-azul.png", descripcion: "Gorro de color azul para niños pequeños.", costo: 14000},
        {nombre: "maleta", imagen: "./productos/niños/maleta-mickey.png", descripcion: "Maleta de color azul de mickey, para niños de 3 a 9 años.", costo: 70000}
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

    if(e.target.matches("#btn-buscar")){

        const categoorias = {
            hombres: "Hola"
        }

        const producto = document.querySelector("#buscador-productos").value;

        const valueCategoria = document.querySelector("#filtro-categorias").value;

        if(valueCategoria  == "hombres"){buscandoProducto(hombres, producto);}
        if(valueCategoria  == "mujeres"){buscandoProducto(mujeres, producto);}
        if(valueCategoria  == "niños"){buscandoProducto(niños, producto);}

    }

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

function mostrarDatos(data){
    let lista = "";
    data.forEach(element => {
        lista += 
        `
            <div class="contenedor-producto">
                <div class="contenedor-producto--imagen">
                    <img src="${element.imagen}" />
                </div>

                <p> <b> Descripcion: </b> ${element.descripcion} </p>
                <h3> <b> COP: </b> ${element.costo} Pesos</h3>
                <button> Agregar </button>
            </div>
        `
    });

    document.querySelector(".contenedor-productos-filtro").innerHTML = lista;
}

function mostrarProducto(producto){
    console.log(producto)
    let lista = "";
    lista = 
    `
        <div class="contenedor-producto">
            <div class="contenedor-producto--imagen">
                <img src="${producto.imagen}" />
            </div>

            <p> <b> Descripcion: </b> ${producto.descripcion} </p>
            <h3> <b> COP: </b> ${producto.costo} Pesos</h3>
            <button> Agregar </button>
        </div>
    `

    document.querySelector(".contenedor-productos-filtro").innerHTML = lista;
}

function buscandoProducto(lista, producto){

    for(let i = 0; i < lista.length; i++){

        const nombre = lista[i].nombre;

        const productoPorBuscar = producto.toLowerCase();

        console.log(productoPorBuscar, nombre)

        if(productoPorBuscar == nombre){
            
            mostrarProducto(lista[i]);

            return;

        }
        
    }

    document.querySelector(".contenedor-productos-filtro").innerHTML = `No se encontro el producto: ${producto}`;

}





