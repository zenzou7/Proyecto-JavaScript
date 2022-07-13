// Metodos HTTP

// GET      Permite obtener Informacion en general,normalmente es el mas utilizado en una aplicacion web
// POST     Enviar informacion hacia un servidoroservicio web,via HTTP como OBJETO/JSON
// PUT      Actualizar un elemento via http enviando el objeto como parte de la actualizacion
// PATCH    Actualizar un elemento via http especificando el campoaactualizar(Objeto)
// DELETE   Eliminar un elemento via http
     
           
//Mostrar productos

let titulo = document.getElementById("titulo");
let mostrarProductosAll = document.getElementById("mostrarProductosAll");


function mostrarProductos(){
    fetch('./JavaScript/productos.json')
        .then(resp => resp.json())
        .then(bebidas => {bebidas.forEach(bebida =>{
            bebidas.push(bebida)
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
                let bebcant= (bebida.cantidad >=1)? true : false
                if(bebcant){
                    divCarrito.innerHTML=``
                    bebida.cantidad++;
                    mostrarCarrito();
                }
                else{
                    carrito.push(bebida)
                    bebida.cantidad++;
                    divCarrito.innerHTML=``
                    mostrarCarrito(); 
                }
            })
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
carritoAlert.innerText = ("Aun no tienes productos en tu carro")

if(!carrito){
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
        <h3 class="card__cantidad">X${bebida.cantidad}</p>
        <h3 class="card__precio">$${bebida.precio * bebida.cantidad}</h3>`
        let botonBorrar = document.createElement("button")
        botonBorrar.innerText = ("X")
        botonBorrar.setAttribute("data",bebida.nombre)
        carritoDiv.append(botonBorrar)
        divCarrito.append(carritoDiv)
            
        botonBorrar.onclick = (e) =>{
            const bebidaNombre = e.target.getAttribute(`data`)
            const bebcant= (bebida.cantidad <=1)? true : false
            if(bebcant){
            carrito = carrito.filter(bebida => bebida.nombre !== bebidaNombre)
            divCarrito.innerHTML=``
            bebida.cantidad--;
            
            mostrarCarrito();
            }
            else{
                divCarrito.innerHTML=``
                bebida.cantidad--;
                mostrarCarrito();
            }
        }
    })

    //Costo Total del carro
    function total(){
        let suma=0;
        carrito.forEach((bebida) => {
            suma = suma + bebida.precio * bebida.cantidad
        })
        return suma;
    }

    let costoTotal = document.createElement("p")
    costoTotal.innerText =(`Costo total: $${total()}`)
    divCarrito.append(costoTotal)
}

//Botones 
function mostrarBotones(){
    const botones= document.getElementById("botones")
    
    //Boton Guardar carrito
    const botonGuardar = document.createElement("button")
    botonGuardar.innerText = ("Guardar Carrito")
    botonGuardar.setAttribute("id", "botonGuardar")
    botones.append(botonGuardar)

    botonGuardar.addEventListener("click", ()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    //Boton borrar carrito
    const botonBorrar = document.createElement("button")
    botonBorrar.innerText = ("Borrar Carrito")
    botonBorrar.setAttribute("id", "botonBorrar")
    botones.append(botonBorrar)
    botonBorrar.addEventListener("click", function(){
        localStorage.clear()
        bebidas.forEach((bebida) => bebida.cantidad=0)
        carrito.splice(0,carrito.length)
        divCarrito.innerHTML=``
    })

    //Boton compra

    const botonCompra = document.createElement("button")
    botonCompra.innerText = ("Confirmar compra")
    botonCompra.setAttribute("id", "botonCompra")
    botones.append(botonCompra)

    botonCompra.addEventListener("click", ()=>{
        Swal.fire({
            title: 'Muchas gracias por su compra!',
            text: 'Tu pédido llegará algun día.',
            icon: 'success',
            confirmButtonText: 'Hecho'
        })

        bebidas.forEach((bebida) => bebida.cantidad=0)
        carrito.splice(0,carrito.length)
        divCarrito.innerHTML = ``
    })   
}
mostrarBotones();
}
//verifico si existe el local storage

if(localStorage.getItem("carrito")){
const bebidasLS = JSON.parse(localStorage.getItem("carrito"));

for (const obj of bebidasLS){
/*     const {img, nombre, precio, cantidad, total} = bebidasLS
    
    carrito.push(new Bebida(img, nombre, precio, cantidad, total)); */
    carrito.push(new BebidaLS(obj));
}
mostrarCarrito();
}



