let numA = prompt("ingresar un numero");
let numB = prompt("Ingrese otro numero");
while(numA != "ESC"){
    let suma = Number(numA) + Number(numB);
    alert(suma);
    numB=suma;
    numA=prompt("ingresa otro numero");
}