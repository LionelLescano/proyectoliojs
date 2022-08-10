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


var Productos = [Hoodie1, Hoodie2, Hoodie3, Hoodie4, Hoodie5, Hoodie6];

var ArrayCarrito = [];

const precioTotal = document.getElementById('precioTotal');



document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('ArrayCarrito')) {
        ArrayCarrito = JSON.parse(localStorage.getItem('ArrayCarrito'))
        Actualizar()

    }
})


const Actualizar = () => {
    const textoCarrito = document.getElementById('numero-carrito');
    textoCarrito.innerText = ArrayCarrito.length;
    precioTotal.innerText = `${ArrayCarrito.reduce((acc,prod) => acc + prod.precio,0)} $`

}

function mostrarProductos(arreglo) {

    const contenedorProductos = document.getElementById("contenedor-de-Hoodies");
    contenedorProductos.innerHTML = "";
    arreglo.forEach(({
        imagen,
        modelo,
        precio,
        id
    }) => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("card");
        divProducto.innerHTML = `
             <img class="card-img-top img-fluid" src="${imagen}" alt="${modelo}">
             <h3 class="card-title">${modelo}</h3>
             <h4 class="card-title">Precio: $ ${precio}</h4>
             <h5 class ="card-title"> Hasta 3 cuotas sin interes de $${Math.round(precio/3)}</h5> 
             <button id="add${id}" type="button" class="boton-agregar btn btn-outline-primary btn-lg"> Agregar al Carrito </button>
           `

        contenedorProductos.appendChild(divProducto);


        const boton = document.getElementById(`add${id}`)
        boton.addEventListener("click", () => {
            localStorage.setItem('ArrayCarrito', JSON.stringify(ArrayCarrito))
            agregarCarrito(id);
            Actualizar();
            alertaTiempo();
        })

        const botonVerCarrito = document.getElementById("btnCarrito");
        botonVerCarrito.addEventListener("click", () => {

            mostrarProductos(ArrayCarrito);
            CrearBotonVolver();

        })

        const botonLimpiarCarrito = document.getElementById('eliminarCarrito');
        botonLimpiarCarrito.addEventListener("click", () => {
            consultarCarrito();
        })
    })
}


const CrearBotonVolver = () => {
    const botonVolver = document.createElement('button');
    botonVolver.classList.add('boton-volver');
    botonVolver.innerText = 'atras';
    botonVolver.addEventListener('click', () => {
        mostrarProductos(Productos);
    })

    document.getElementById('contenedor-de-Hoodies').prepend(botonVolver);
}


const agregarCarrito = (prodID) => {
    const item = Productos.find((producto) => producto.id == prodID);
    ArrayCarrito.push(item);
}

const alertaTiempo = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste al Carrito',
        showConfirmButton: false,
        timer: 500,
    })

}

// const ocultar = () => {
//     const button = document.querySelectorAll('.boton-agregar');
//     button.classList.add('d-none');
// }


const eliminarCarrito = (arreglo) => {
    return arreglo.length = 0;
}



const consultarCarrito = () => {
    Swal.fire({
        title: 'Deseas eliminar su carrito?',
        text: "No podras revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarCarrito(ArrayCarrito);
            mostrarProductos(ArrayCarrito);
            Actualizar();
            CrearBotonVolver();
            localStorage.clear();
            Swal.fire(
                'Eliminado!',
                'Eliminaste Carrito! ',
                'success'
            )

        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire(
                'Cancelado',
                'No has borrado nada :)',
                'error'
            )
        }
    })

}



mostrarProductos(Productos);















//----------------------------------------------------------------------------------------------------------------