alert("¿Eres mayor de edad?");
let edad = prompt("ingresar tu edad");

let compra=true;

let continuar;

let costoTotal=0;

let bebida;
const bebida1 = {
    nombre:"Fernet Branca",
    costo:800,
    cantidad:0,
    total:0
}

const bebida2= {
    nombre:"Monster",
    costo:300,
    cantidad:0,
    total:0
}

const bebida3={
    nombre:"Vodka Absolute",
    costo:1000,
    cantidad:0,
    total:0
}

function bebidas(beb){
    alert( beb.nombre+", precio de $"+beb.costo+", a continuacion elegi la cantidad en numeros");
    recibo.push(beb.nombre);
}

function suma(n1,n2,n3){
    costoTotal=n1+n2+n3;
}

let recibo = [];
function mostrar(){
    for(i=0 ; i<1 ; i++){
        /* document.write(recibo[i]) */
        document.write("Tu compra es de "+recibo.join("-")+" con un costo total de $"+costoTotal);
    }
}

function cantidad(beb){
    beb.cantidad=prompt("Cantidad en numeros del producto");
    beb.total= beb.cantidad*beb.costo;
    alert("$"+beb.total);
}

function continuarCompra(){
    continuar=prompt("desea comprar algo mas? responda 'si' o 'no'");

    if(continuar.toLocaleLowerCase()=="no"){
        suma(bebida1.total,bebida2.total,bebida3.total);
        mostrar();
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
