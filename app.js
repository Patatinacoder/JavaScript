

import { validarProductoCarrito } from "./accionesCarrito.js";
export {mostrarProductos};


const mostrarProductos = (productos)=> {
const contenedorProductos = document.getElementById('cajas');
productos.forEach(producto => {
     
    const div = document.createElement('div');
    div.classList.add('caja');
    div.innerHTML = `

    <div class= "caja">
    
    <img src="${producto.img}" alt="alfajor">

        <h2>${producto.nombre} </h2>
        <h3>${producto.det}</h3>
        <h3>${producto.precio}</h3>
        <button class="button" ${producto.id}>¡Llévame!</button> 



</div>



    `;
 
  contenedorProductos.appendChild(div);


const cajas   = document.querySelector('cajas');
const  boton   = document.querySelectorAll(`button${producto.id}`);
boton.forEach((button) => {button.addEventListener('click',(boton) => {
    validarProductoCarrito(producto.id)
})});


   




 
//  })});

 

// let bienvenida2 = document.getElementById('bienvenida2')
// const cliente = prompt('Ingresa tu nombre')
//  bienvenida2.innerText = 'Hola ' +cliente + ' a continuación puedes echarle un vistazo a nuestros productos';
// console.log(bienvenida2.innerHTML);



// const cajas    = document.querySelector('cajas');
// const  boton   = document.querySelectorAll('button');
//  boton.forEach((button) => {button.addEventListener('click',(boton) => {
//     alert('Estupendo, buena elección!. Lo guardaremos en el carrito');

 
//  })});







})}
