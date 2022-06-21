alert("¿Eres mayor de edad?");
let edad = prompt("ingresar tu edad");

let compra=true;

let continuar;

let costoTotal=0;

let bebida;

class Bebida{
    constructor(nombre,costo,cantidad,total){
        this.nombre = nombre
        this.costo = costo
        this.cantidad = cantidad
        this.total = total
    }
}
 
const bebida1 = new Bebida("Fernet Branca", 800, 0, 0);
const bebida2 = new Bebida("Monster", 300, 0, 0);
const bebida3 = new Bebida("Vodka Absolute", 1000, 0, 0);

function bebidas(beb){
    alert( beb.nombre+", precio de $"+beb.costo+", a continuacion elegi la cantidad en numeros");
    recibo.push(beb);
}

function suma(n1,n2,n3){
    costoTotal=n1+n2+n3;
}

let recibo = [];
function mostrarTotal(){
    for (let i=0 ; i < recibo.length ; i++) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML=`<h3>Tu producto ${recibo[i].nombre} x ${recibo[i].cantidad}= $${recibo[i].total}</h3>`
        document.body.appendChild(contenedor);
    }
    document.write(`<h2>El total de su compra es $${costoTotal}</h2>`)
}

function cantidad(beb){
    beb.cantidad=prompt("Cantidad en numeros del producto");  
    beb.total= beb.cantidad*beb.costo;
}

function continuarCompra(){
    continuar=prompt("desea comprar algo mas? responda 'si' o 'no'");

    if(continuar.toLocaleLowerCase()=="no"){
        suma(bebida1.total,bebida2.total,bebida3.total);
        mostrarTotal();
        compra=false;
    }
    else if(continuar.toLocaleLowerCase()!="si" && continuar.toLocaleLowerCase()!="no"){
        continuar=prompt("Solo ingresa 'si' o 'no'");
    }
}


while(compra){
    if(edad<18){
        alert("Debes ser mayor de edad para continuar.");
        break;
    }
    else{
        alert("Elegi tu bebida: 1 Fernet Branca, 2 Monster y 3 Vodka Absolute");
        bebida=prompt("ingresa el numero de la bebida elegida");
        switch(bebida){
            case "1":
                bebidas(bebida1);
                cantidad(bebida1);
                continuarCompra();
            break;

            case "2":
                bebidas(bebida2);
                cantidad(bebida2);
                continuarCompra();
            break;    

            case "3":
                bebidas(bebida3);
                cantidad(bebida3);
                continuarCompra();
            break;

            default:
                alert("Ingresa solo el numero de las bebidas disponibles.");
            break;
        }
    }
}
