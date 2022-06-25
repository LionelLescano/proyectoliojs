function imprimirMensaje(monto) {
    return alert("su monto a pagar es" + monto);
}

function DetenerAgregado() {

    let booleanNew = false;
    let Consulta = prompt("desea seguir agregando productos?")

    if (Consulta.toLowerCase() === "no") {
        booleanNew = true;
        alert("Hasta Luego.")
    } else if (Consulta.toLowerCase() === "si") {
        booleanNew = false;
    } else {
        booleanNew = false;
    }

    return booleanNew
}

function filtrarCantidad(tipo, arreglo) {
    //va desde el menor valor hasta el mayor
    var ArrayCantidad = [];

    if (tipo.toLowerCase() == "cantidad") {
        ArrayCantidad = arreglo.map(elemento => elemento);
        ArrayCantidad.sort(function (a, b) {
            return a.cantidad - b.cantidad;
        })
    }

    return ArrayCantidad;

}

function filtarCantidadDescendente(tipo, arreglo) {
    //va desde el valor mas alto hasta el menor 
    var ArrayCantidad = [];

    if (tipo.toLowerCase() == "cantidad") {
        ArrayCantidad = arreglo.map(elemento => elemento);
        ArrayCantidad.sort(function (a, b) {
            return b.cantidad - a.cantidad;
        })
    }

    return ArrayCantidad;
}

function filtrarPrecio(tipo, arreglo) {
    //va desde el menor valor hasta el mayor
    var ArrayPrecios = [];

    if (tipo.toLowerCase() == "precio") {
        ArrayPrecios = arreglo.map(elemento => elemento);
        ArrayPrecios.sort(function (a, b) {
            return a.precio - b.precio;
        })
    }
    return ArrayPrecios;
}


function filtrarPrecioDescendente(tipo, arreglo) {
    //va desde el valor mas alto hasta el menor 
    var ArrayPrecios = [];

    if (tipo.toLowerCase() == "precio") {
        ArrayPrecios = arreglo.map(elemento => elemento);
        ArrayPrecios.sort(function (a, b) {
            return b.precio - a.precio;
        })
    }
    return ArrayPrecios;
}

function sumarPreciosTotal(arreglo) {

    const ValorTotal = arreglo.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    return ValorTotal;
}



class Hoodie {
    constructor(id, modelo, precio, talle, imagen) {
        this.id = id;
        this.modelo = modelo;
        this.precio = Math.round(precio);
        this.talle = talle;
        this.imagen = imagen;
    }
     
}



const Hoodie1 = new Hoodie(1, "HOODIE ROSA", 15000, "XL", "./assets/img/horror-hoodie-25-rosa.png")
const Hoodie2 = new Hoodie(2, "HOODIE 13 BLACK", 10000, "L", "./assets/img/hoodie-13-black.png")
const Hoodie3 = new Hoodie(3, "HOODIE DESIGNING", 11000, "XL", "./assets/img/hoodie-designing.png")
const Hoodie4 = new Hoodie(4, "HOODIE NASTY", 12000, "M", "./assets/img/hoodie-nasty-black.png")
const Hoodie5 = new Hoodie(5, "HOODIE YELLOWSTYLE", 10500, "L", "./assets/img/hoodie-yellowstyle.webp")
const Hoodie6 = new Hoodie(6, "HOODIE GREENLIFE", 12400, "XL", "./assets/img/hoodie-verde.jpg")

var ArrayProductos = [];
var ArrayCarrito = [];

ArrayProductos.push(Hoodie1);
ArrayProductos.push(Hoodie2);
ArrayProductos.push(Hoodie3);
ArrayProductos.push(Hoodie4);
ArrayProductos.push(Hoodie5);
ArrayProductos.push(Hoodie6);


function mostrarProductos(productos) {

    const contenedorProductos = document.getElementById("contenedor-de-Hoodies");
    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.id = producto.id;
        divProducto.classList.add("card");
        divProducto.innerHTML = `
            <img class="card-img-top" src="${producto.imagen}" alt="${producto.modelo}">
            <h3 class="card-title">${producto.modelo}</h3>
            <h4 class="card-title">Precio: $ ${producto.precio}</h4>
            <h5 class ="card-title"> Hasta 3 cuotas sin interes de $${Math.round(producto.precio/3)}</h5> 
            <button id=${producto.id} type="button" class=".boton-comprar btn btn-outline-primary btn-lg"> Agregar al Carrito </button>
          `;

        //------------------------------------------------------------//

        //  const AgregarComprado = document.querySelectorAll('.boton-comprar');
        // AgregarComprado.forEach((AgregarCarritoCompra) => {
        //     AgregarCarritoCompra.addEventListener('click',() => console.log('click'))
        // })

        //------------------------------------------------------------//

        const botonVerCarrito = document.getElementById("btnCarrito");
        botonVerCarrito.addEventListener("click", () => {
            mostrarProductos(ArrayCarrito);
            CrearBotonVolver();
        })
        contenedorProductos.appendChild(divProducto);
    })
}

function CrearBotonVolver() {
    const botonVolver = document.createElement("button");
    botonVolver.classList.add("boton-volver");
    botonVolver.innerText = "Atras";
    botonVolver.addEventListener("click", () => {
        mostrarProductos(ArrayProductos);
    })
    document.getElementById("contenedor-de-Hoodies").prepend(botonVolver);
}

mostrarProductos(ArrayProductos);










//----------------------------------------------------------------------------------------------------------------












// let Detener = false;
// let Filtro = false;

// while (Detener == false) {

//     let modeloPro = prompt("Ingrese el modelo del hoodie: ");
//     let tallePro = prompt("Ingrese el talle del hoodie: ");
//     let colorPro = prompt("Ingrese el color del hoodie: ");
//     let cantidadPro = prompt("Ingrese cantidad:");
//     let precioPro = prompt("Ingrese precio:");

//     ArrayProductos.push(new Hoodies(modeloPro.toLowerCase(), precioPro, tallePro.toLowerCase(), colorPro.toLowerCase(), cantidadPro));

//     if (DetenerAgregado() == true) {
//         Detener = true;
//     } else {
//         Detener = false;
//     }

// }

// console.log(ArrayProductos);

// //--------------------------------------------------------------------------------

// let consulta = prompt("desea filtrar?");

// switch (consulta.toLowerCase()) {
//     case "si":
//         Filtro = true;
//         break;
//     case "no":
//         Filtro = false;
//         break;
//     default:
//         alert("Opcion no válida.")
// }

// if (Filtro == true) {

//     let tipo = prompt("desea filtrar por precio o por cantidad?// precio - cantidad ");
//     let orden = prompt("en orden Ascendente o descendente?");

//     switch (tipo.toLowerCase()) {
//         case "cantidad":
//             switch (orden.toLowerCase()) {
//                 case "ascendente":
//                     console.log(filtrarCantidad("cantidad", ArrayProductos));
//                     break;
//                 case "descendente":
//                     console.log(filtarCantidadDescendente("cantidad", ArrayProductos));
//                     break;
//                 default:
//                     Filtro = false;
//                     break;
//             }
//             break;

//         case "precio":
//             switch (orden.toLocaleUpperCase()) {
//                 case "ascendente":
//                     console.log(filtrarPrecio("precio", ArrayProductos));
//                     break;
//                 case "descendente":
//                     console.log(filtrarPrecioDescendente("precio", ArrayProductos));
//                     break;
//                 default:
//                     Filtro = false;
//                     break;
//             }
//             break;
//         default:
//             alert("opcion no valida.");
//             break;
//     }
// }
// //--------------------------------------------------------------------------------

// let Suma = prompt("Desea sumar el valor total de los precios ?");

// switch (Suma.toLowerCase()) {
//     case "si":
//         console.log(sumarPreciosTotal(ArrayProductos));
//         break;
//     case "no":
//         alert("Gracias, hasta pronto.");
//         break;
//     default:
//         alert("opcion no valida.");
//         break;
// }

// Filtro = false;

// let pregunta = prompt("desea filtrar de nuevo ?");

// switch (pregunta.toLowerCase) {
//     case "si":
//         Filtro = true;
//         break;
//     case "no":
//         alert("hasta luego.");
//         break;

//     default:
//         alert("opcion no valida");
//         break;
// }