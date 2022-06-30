//Mostrar productos

let titulo = document.getElementById("titulo");
let mostrarProductosAll = document.getElementById("mostrarProductosAll");


function mostrarProductos(){
    bebidas.forEach((bebida)=>{
        let card = document.createElement("div")
        card.setAttribute("class", "card")
        card.innerHTML += `
        <img class="card__img" src="${bebida.img}">
        <h3 class="card__nombre">${bebida.nombre}</h3>
        <p class="card__precio">$${bebida.precio}</p>`
        let botonCompra = document.createElement("button")
        botonCompra.innerText = ("Agregar al carrito")
        card.append(botonCompra)
        mostrarProductosAll.append(card)

        botonCompra.addEventListener("click", function(){
            if(carrito.filter(bebida => bebida.cantidad >=1) == bebida){
                bebida.cantidad= bebida.cantidad + 1;
            }
            else{
                carrito.push(bebida)
                bebida.cantidad= bebida.cantidad + 1;
                divCarrito.innerHTML=``
                mostrarCarrito(); 
            }
        })
    })
}

mostrarProductos();

//Carrito

let mostrarProductosCarrito = document.getElementById("mostrarProductosCarrito")
let carritoLista = document.getElementById("carritoLista")
let divCarrito = document.getElementById("divCarrito")

let carritoAlert = document.createElement("h2")
carritoAlert.setAttribute("class", "alerta")

if(carrito.length = 0){
    carritoAlert.innerText = ("Aun no tienes productos en tu carro")
    divCarrito.append(carritoAlert)
}

else{
function mostrarCarrito(){
    carritoAlert.remove()

    //Elementos del carrito
    carrito.forEach((bebida) => {
        const carritoDiv = document.createElement("li")
        carritoDiv.innerHTML += `
        <img class="card__img" src="${bebida.img}">
        <h3 class="card__nombre">${bebida.nombre}</h3>
        <h3 class="card__precio">$${bebida.precio}</h3>`
        let botonBorrar = document.createElement("button")
        botonBorrar.innerText = ("X")
        botonBorrar.setAttribute("data",bebida.nombre)
        carritoDiv.append(botonBorrar)
        divCarrito.append(carritoDiv)
            
        botonBorrar.onclick = (e) =>{
            const bebidaNombre = e.target.getAttribute(`data`)
            carrito = carrito.filter(bebida => bebida.nombre !== bebidaNombre)
            divCarrito.innerHTML=``

            mostrarCarrito();
        }
    })

    //Costo Total del carro
    function total(){
        let suma=0;
        carrito.forEach((bebida) => {
            suma = suma + bebida.precio
        })
        return suma;
    }

    let costoTotal = document.createElement("p")
    costoTotal.innerText =(`Costo total: $${total()}`)
    divCarrito.append(costoTotal)
}
function mostrarBotones(){
    
        //Botones del storage
        const botonGuardar = document.createElement("button")
        botonGuardar.innerText = ("Guardar Carrito")
        botonGuardar.setAttribute("id", "botonGuardar")
        carritoLista.append(botonGuardar)

        botonGuardar.onclick = function guardarLS(){
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }

        const botonBorrar = document.createElement("button")
        botonBorrar.innerText = ("Borrar Carrito")
        botonBorrar.setAttribute("id", "botonBorrar")
        carritoLista.append(botonBorrar)
        botonBorrar.addEventListener("click", function(){
            localStorage.clear()
        })
}
mostrarBotones()
}
//verifico si existe el local storage

if(localStorage.length != 0){
const bebidasLS = JSON.parse(localStorage.getItem("carrito"));


for (const objeto of bebidasLS){
    carrito.push(new BebidaLS(objeto));
}
mostrarCarrito()
}


