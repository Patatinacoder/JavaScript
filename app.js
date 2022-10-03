


let usuario = [];
usuario [0]= prompt('Hola! Por favor a continuación ingresa tu nombre');
localStorage.setItem('nombres', JSON.stringify(usuario));


const contenedor = document.getElementById('cajas');
productos.forEach((producto) => { 
    const div = document.createElement('div');
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

   


    const  boton   = document.querySelectorAll('button');
     boton.forEach((button) => {button.addEventListener('click',(boton) => {
       alert('Añadido a tu carro de compras')
                         
     })});



    
    
    
    
    
    
        
        
 
    