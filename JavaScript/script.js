//Mostrar productos

let titulo = document.getElementById("titulo");
let mostrarProductosAll = document.getElementById("mostrarProductosAll");


function mostrarProductos(){
    bebidas.forEach((bebida)=>{
        let card = document.createElement("div")
        card.innerHTML += `
        <img src="${bebida.img}">
        <h3>${bebida.nombre}</h3>
        <p>$${bebida.precio}</p>`
        let botonCompra = document.createElement("button")
        botonCompra.innerText = ("Agregar al carrito")
        card.append(botonCompra)
        mostrarProductosAll.append(card)

        botonCompra.addEventListener("click", function(){
            carrito.push(bebida)
            divCarrito.innerHTML=``
             mostrarCarrito(); 
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

if(carrito.length==0){
    carritoAlert.innerText = ("Aun no tienes productos en tu carro")
    divCarrito.append(carritoAlert)
}


function mostrarCarrito(){
    carritoAlert.remove()

    carrito.forEach((bebida) => {
        const carritoDiv = document.createElement("li")
        carritoDiv.innerHTML += `
        <img src="${bebida.img}">
        <h3>${bebida.nombre}</h3>
        <h3>$${bebida.precio}</h3>`
        let botonBorrar = document.createElement("button")
        botonBorrar.innerText = ("X")
        botonBorrar.setAttribute("data",bebida.nombre)
        carritoDiv.append(botonBorrar)
        divCarrito.append(carritoDiv)
        
        
        botonBorrar.onclick = (e) =>{
            const bebidaNombre = e.target.getAttribute(`data`)
            carrito = carrito.filter(bebida => bebida.nombre !== bebidaNombre)
            divCarrito.innerHTML=``
            mostrarCarrito()
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

