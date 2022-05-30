alert("Debes ingresar un valor numerico o escribir 'ESC' para salir");
let numA = prompt("ingresar un numero");
let numB = prompt("Ingrese otro numero");
while(numA != "ESC"){
    if((isNaN(numA))||(isNaN(numB))){
        alert("Debes ingresar solo numeros, recarga la pagina para continuar");
        break;
    }
    else if((numA=="ESC")||(numB=="ESC")){
        break;
    }
    else{
        let suma = Number(numA) + Number(numB);
        alert(suma);
        numB=suma;
        numA=prompt("ingresa otro numero");
        if(isNaN(numA)){
            alert("Debes ingresar solo numeros, recarga la pagina para continuar");
            break;
        }
    }
}                