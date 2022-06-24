let carrito =[];

class Bebida{
    constructor(img,nombre,precio,cantidad,total){
        this.img= img
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.total = total
    }
}

const bebida1 = new Bebida("./img/fernet_branca.jpg","Fernet Branca", 800, 0, 0);
const bebida2 = new Bebida("./img/monster.jpg","Monster", 300, 0, 0);
const bebida3 = new Bebida("./img/vodka_absolut.jpg","Vodka Absolut", 1000, 0, 0);

let bebidas= [bebida1,bebida2,bebida3];

 
