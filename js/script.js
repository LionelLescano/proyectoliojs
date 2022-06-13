class Hoodies {
    constructor(modelo, precio, talle, color, cantidad, cuotas) {
        this.modelo = modelo;
        this.precio = Math.round(precio);
        this.talle = talle;
        this.cantidad = cantidad;
        this.color = color;
        this.cuotas = cuotas;
        this.vendido = true;

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

    SumarIva() {
        return this.precio * 1.21;
    }

    Vender() {
        this.vendido = false;
    }

    reciboCompra() {
        return "Su compra es de un Hoodie color " + this.color.toUpperCase();
    }

}


class Camperas {
    constructor(modelo, precio, talle, cantidad, cuotas) {
        this.modelo = modelo;
        this.precio = Math.round(precio);
        this.talle = talle;
        this.cantidad = cantidad;
        this.cuotas = cuotas;
        this.vendido = true;


        SumarIntereses(); {
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

        SumarIva(); {
            return this.precio * 1.21;
        }

        Vender(); {
            this.vendido = false;
        }
    }
}