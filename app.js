



const contenedor = document.getElementById('cajas');
productos.forEach(producto => {
     
    const div = document.createElement('div');
    div.classList.add('caja');
    div.innerHTML = `

    <div class= "caja">
    
    <img src="${producto.img}">

    <h2>${producto.nombre}</h2>
    <h3>${producto.det}</h3>
    <button>${producto.precio}</button>

</div>



    `;
 
    contenedor.appendChild(div);
})








const cajas    = document.querySelector('cajas');
const  boton   = document.querySelectorAll('button');
 boton.forEach((button) => {button.addEventListener('click',(boton) => {
    alert('Estupendo, buena elección!. Lo guardaremos en el carrito');

 
 })});