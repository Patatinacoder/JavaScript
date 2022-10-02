


let bienvenida2 = document.getElementById('bienvenida2')
const cliente = prompt('Ingresa tu nombre')
 bienvenida2.innerText = 'Hola ' +cliente + ' a continuación puedes echarle un vistazo a nuestros productos';
console.log(bienvenida2.innerHTML);


const contenedor = document.getElementById('cajas');
productos.forEach(producto => { 
    const div = document.createElement('cajas');
    div.classList.add('caja');
    div.innerHTML = `


    <div class="caja">
    
     <img src="${producto.img}">

     <h2>${producto.nombre}</h2>
     <h3>${producto.det}</h3>
     <button class="button">Llévame a $ ${producto.precio}</button> 

 </div>



    `


    contenedor.appendChild(div);
})



    
    
    const cajas    = document.querySelector('cajas');
    const  boton   = document.querySelectorAll('button');
     boton.forEach((button) => {button.addEventListener('click',(boton) => {
        alert('Estupendo, buena elección!. Lo guardaremos en el carrito');
    
     
     })});
    
    
    
    
    
    
    
    
    