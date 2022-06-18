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


// Stockeo

class Hoodies {
    constructor(modelo, precio, talle, color, cantidad) {
        this.modelo = modelo;
        this.precio = Math.round(precio);
        this.talle = talle;
        this.color = color;
        this.cantidad = cantidad;
        this.vendido = true;
        this.disponibilidad = true;

    }

    SumarIntereses() {

        valorFinal = 0;

        if (this.cuotas == 6) {
            valorFinal = Math.round(this.precio * 1.2);
        } else if (this.cuotas == 9) {
            valorFinal = Math.round(this.precio * 1.4);
        } else {
            valorFinal = this.precio;
        }
        return valorFinal;
    }

    Iva() {
        return this.precio * 1.21;
    }

    Vender() {
        this.vendido = false;
    }

    reciboCompra() {
        return "Su compra es de un Hoodie color " + this.color.toUpperCase();
    }

    SinStock() {
        if (this.cantidad == 0) {
            return this.disponibilidad = false;
        } else {
            this.disponibilidad = true;
        }
    }

}

// class Camperas {
//     constructor(modelo, precio, talle, cantidad, cuotas) {
//         this.modelo = modelo;
//         this.precio = Math.round(precio);
//         this.talle = talle;
//         this.cantidad = cantidad;
//         this.cuotas = cuotas;
//         this.vendido = true;
//     }

//         SumarIntereses() {
//             valorFinal = 0;

//             if (this.cuotas === 6) {
//                 valorFinal = Math.round(this.precio * 1.2);
//             } else if (this.cuotas === 9) {
//                 valorFinal = Math.round(this.precio * 1.4);
//             } else {
//                 valorFinal = this.precio;
//             }
//             return valorFinal;
//         }

//         SumarIva() {
//             return this.precio * 1.21;
//         }

//         Vender() {
//             this.vendido = false;
//         }

// }


var ArrayProductos = [];

let Detener = false;
let Filtro = false;

while (Detener == false) {

    let modeloPro = prompt("Ingrese el modelo del hoodie: ");
    let tallePro = prompt("Ingrese el talle del hoodie: ");
    let colorPro = prompt("Ingrese el color del hoodie: ");
    let cantidadPro = prompt("Ingrese cantidad:");
    let precioPro = prompt("Ingrese precio:");

    ArrayProductos.push(new Hoodies(modeloPro.toLowerCase(), precioPro, tallePro.toLowerCase(), colorPro.toLowerCase(), cantidadPro));

    if (DetenerAgregado() == true) {
        Detener = true;
    } else {
        Detener = false;
    }

}

console.log(ArrayProductos);

//--------------------------------------------------------------------------------

let consulta = prompt("desea filtrar?");

switch (consulta.toLowerCase()) {
    case "si":
        Filtro = true;
        break;
    case "no":
        Filtro = false;
        break;
    default:
        alert("Opcion no válida.")
}

if (Filtro == true) {

    let tipo = prompt("desea filtrar por precio o por cantidad?// precio - cantidad ");
    let orden = prompt("en orden Ascendente o descendente?");

    switch (tipo.toLowerCase()) {
        case "cantidad":
            switch (orden.toLowerCase()) {
                case "ascendente":
                    console.log(filtrarCantidad("cantidad", ArrayProductos));
                    break;
                case "descendente":
                    console.log(filtarCantidadDescendente("cantidad", ArrayProductos));
                    break;
                default:
                    Filtro = false;
                    break;
            }
            break;

        case "precio":
            switch (orden.toLocaleUpperCase()) {
                case "ascendente":
                    console.log(filtrarPrecio("precio", ArrayProductos));
                    break;
                case "descendente":
                    console.log(filtrarPrecioDescendente("precio", ArrayProductos));
                    break;
                default:
                    Filtro = false;
                    break;
            }
            break;
        default:
            alert("opcion no valida.");
            break;
    }
}
//--------------------------------------------------------------------------------

let Suma = prompt("Desea sumar el valor total de los precios ?");

switch (Suma.toLowerCase()) {
    case "si":
        console.log(sumarPreciosTotal(ArrayProductos));
        break;
    case "no":
        alert("Gracias, hasta pronto.");
        break;
    default:
        alert("opcion no valida.");
        break;
}

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















