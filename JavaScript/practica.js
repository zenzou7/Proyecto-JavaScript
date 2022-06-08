alert("¿Eres mayor de edad?");
let edad = prompt("ingresar tu edad");

let compra=true;

let continuar;

let costoTotal=0;

let total1=0;
let total2=0;
let total3=0;

let bebida;
const bebida1 = {
    nombre:"Fernet Branca",
    costo:800,
    cantidad:0
}

const bebida2= {
    nombre:"Monster",
    costo:300,
    cantidad:0
}

const bebida3={
    nombre:"Vodka Absolute",
    costo:1000,
    cantidad:0
}

function suma(n1,n2,n3){
    costoTotal=n1+n2+n3;
}

function mostrar(mensaje){
    alert("El costo total de su compra es $"+mensaje)
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
                alert("Fernet Branca, precio de $800, a continuacion elegi la cantidad en numeros");
                bebida1.cantidad=prompt("Cantidad en numeros del producto");
                total1= bebida1.cantidad*bebida1.costo;
                alert("$"+total1);
                continuar=prompt("desea comprar algo mas? responda 'si' o 'no'");
                    if((continuar=="No") || (continuar=="no")){
                        suma(total1,total2,total3);
                        mostrar(costoTotal);
                        compra=false;
                        break;
                    }
                    else if((continuar !="Si") || (continuar !="si") || (continuar !="No") || (continuar !="no")){
                        continuar=prompt("Solo ingresa 'si' o 'no'");
                    }
                    else{
                        alert("Elegi tu bebida: 1 Fernet Branca, 2 Monster y 3 Vodka Absolute");
                        bebida=prompt("ingresa el numero de la bebida elegida");
                    }
                break;
            case "2":
                alert("Monster, precio de $300, a continuacion elegi la cantidad en numeros");
                bebida2.cantidad=prompt("Cantidad en numeros del producto");
                total2= bebida2.cantidad*bebida2.costo;
                suma(total1,total2,total3);
                alert("$"+total2);
                continuar=prompt("desea comprar algo mas? responda 'si' o 'no'");
                    if((continuar=="No") || (continuar=="no")){
                        mostrar(costoTotal);
                        compra=false;
                        break;
                    }
                    else if((continuar !="Si") || (continuar !="si") || (continuar !="No") || (continuar !="no")){
                        continuar=prompt("Solo ingresa 'si' o 'no'");
                    }
                    else{
                        alert("Elegi tu bebida: 1 Fernet Branca, 2 Monster y 3 Vodka Absolute");
                        bebida=prompt("ingresa el numero de la bebida elegida");
                    }
                break;    
            case "3":
                alert("Vodka Absolute, precio de $1000, a continuacion elegi la cantidad en numeros");
                bebida3.cantidad=prompt("Cantidad en numeros del producto");
                total3= bebida3.cantidad*bebida3.costo;
                suma(total1,total2,total3);
                alert("$"+total3);
                continuar=prompt("desea comprar algo mas? responda 'si' o 'no'");
                    if((continuar=="No") || (continuar=="no")){
                        mostrar(costoTotal);
                        compra=false;
                        break;
                    }
                    else if((continuar !="Si") || (continuar !="si") || (continuar !="No") || (continuar !="no")){
                        continuar=prompt("Solo ingresa 'si' o 'no'");
                    }
                    else{
                        alert("Elegi tu bebida: 1 Fernet Branca, 2 Monster y 3 Vodka Absolute");
                        bebida=prompt("ingresa el numero de la bebida elegida");
                    }
                break;

                default:
                    alert("Ingresa solo el numero de las bebidas disponibles.");
                    break;
        }
    }
}
