function imprimirMensaje(monto){
    return alert("su monto a pagar es" + monto);
}

function DetenerAgregado () {
    
    let booleanNew = false;
    let Consulta = prompt("desea seguir agregando productos?") 
    
    if (Consulta.toLowerCase() === "no") {
        booleanNew = true;
    } else if(Consulta.toLowerCase() === "si") {
        booleanNew = false;
        alert("Hasta luego.");
    } else {
        booleanNew =  false;
    }

    return booleanNew
}

function filtrar(tipo, arreglo) {
    
    var ArrayCantidad = [];
    var ArrayPrecios = [];

    if (tipo.toLowerCase() == "precio" ) {
        ArrayPrecios =  arreglo.map(elemento => elemento);
        ArrayCantidad.sort(function(a,b){
            return a.precio - b.precio;
        })
    }

    if (tipo.toLowerCase()== "cantidad"){
        ArrayCantidad = arreglo.map(elemento => elemento);
        ArrayCantidad.sort(function(a,b){
            return a.cantidad - b.cantidad;
        })
    }

    console.log(ArrayCantidad);
    console.log(ArrayPrecios);
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
        if (this.cantidad == 0){
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

//             if (this.cuotas == 6) {
//                 valorFinal = Math.round(this.precio * 1.2);
//             } else if (this.cuotas == 9) {
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

while(Detener == false){
           
    let modeloPro = prompt ("Ingrese el modelo del hoodie: ");
    let tallePro  = prompt ("Ingrese el talle del hoodie: ");
    let colorPro= prompt ("Ingrese el color del hoodie: ");
    let cantidadPro = prompt ("Ingrese cantidad:");
    let precioPro = prompt ("Ingrese precio:");

    ArrayProductos.push(new Hoodies(modeloPro.toLowerCase(),precioPro, tallePro.toLowerCase(), colorPro.toLowerCase(), cantidadPro));

    if (DetenerAgregado() == true){
        Detener =  true;
    } else {
        Detener = false;
    }
        
}

console.log(ArrayProductos);

let consulta = prompt("desea filtrar?");

if (consulta.toLowerCase() == "si"){
    Filtro = true;
} else if (consulta.toLowerCase() == "no") {
    Filtro =  false;
} else {
    Filtro = false;
}



while(Filtro == true){

}

