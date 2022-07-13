let carrito =[];

class Bebida{
    constructor(img,nombre,precio,cantidad,total){
        this.img= img
        this.nombre = nombre
        this.precio = parseFloat(precio);
        this.cantidad = parseFloat(cantidad)
        this.total = parseFloat(total)
    }
}

/* const bebida1 = new Bebida("./img/fernet_branca.jpg","Fernet Branca", 800, 0, 0);
const bebida2 = new Bebida("./img/monster.png","Monster", 300, 0, 0);
const bebida3 = new Bebida("./img/vodka_absolut.jpg","Vodka Absolut", 1000, 0, 0);

let bebidas= [bebida1,bebida2,bebida3]; */

class BebidaLS {
    constructor(obj) {
        this.img = obj.img
        this.nombre = obj.nombre
        this.precio = parseFloat(obj.precio);
        this.cantidad = parseFloat(obj.cantidad);
        this.total = parseFloat(obj.total);
    }
}


 
