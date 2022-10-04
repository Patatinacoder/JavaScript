




const contenedor = document.getElementById('cajas');

const contenedorCarrito = document.getElementById('carrito-contenedor');


let carrito =[];
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
}
)

productos.forEach((producto) => { 
    const div = document.createElement('div');
    div.classList.add('caja');
    div.innerHTML = `


    
     <img src="${producto.img}">

     <h2>${producto.nombre}</h2>
     <h3>${producto.det}</h3>
     <h3>${producto.precio}</h3>
     <button id="${producto.id}">Llévame</button> 

 </div>



    `


    contenedor.appendChild(div);

    const boton= document.getElementById(`${producto.id}`)

    boton.addEventListener('click', () =>{
        agregarAlCarrito(producto.id)
    })
})





   const agregarAlCarrito = (prodId) => {
    const item= productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
   }


  
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) =>{
const div = document.createElement('div')
div.className= ('productoEnCarrito')
div.innerHTML = `

<p>${prod.nombre}</p>
<p>Precio:${prod.precio}</p>
<p>Cantidad: <span id= "cantidad">${prod.cantidad}</span></p>




`

contenedorCarrito.appendChild(div)
localStorage.setItem('carrito',JSON.stringify(carrito))
    })

}

   
   

