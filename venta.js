





// const productos = [
//     {
//         nombre:'Alfajor Nutella',
//         precio: 1200,
//     },
//     {
//         nombre:'Alfajor Crema de maní',
//         precio: 1200,
//     },
//     {
//         nombre:'Alfajor Pasas al Ron',
//         precio: 1200,
//     },
//     {
//         nombre:'Alfajor Ferrero',
//         precio: 1200,
//     },
//     {
//         nombre:'Alfajor Nueces',
//         precio: 1200,
//     },
//     {
//         nombre:'Alfajor Maracuyá',
//         precio: 1200,
//     },
//     {
//         nombre:'Alfajor Pie de limón',
//         precio: 1200,
//     },
//     {
//         nombre:'Cuchuflies',
//         precio: 1100,
//     },
   
// ]
//     let compra = [];

//     let comprar = prompt('Te damos la Bienvenida a Bosque Dulce, si deseas realizar tu pedido presiona 1 de lo contrario presiona 2')

//     while (comprar != "1"){
//         alert('Gracias por venir, vuelve pronto');
//         comprar = prompt('Te damos la Bienvenida a Bosque Dulce, si deseas realizar tu pedido presiona 1 de lo contrario presiona 2')

//     } 

//     if (comprar == '1'){
    
// let producto = parseInt(prompt(' \n 1 : Alfajor Nutella\n 2 : Alfajor Crema de Maní\n 3 : Alfajor pasas al Ron\n 4 : Alfajor Ferrero\n 5 : Alfajor Maracuyá\n 6 : Alfajor Pie de limón\n 7 : Cuchuflies ' ));
//     while (producto >8) {
//         alert("Opción no válida" ) 
//         let producto = parseInt(prompt(' \n 1 : Alfajor Nutella\n 2 : Alfajor Crema de Maní\n 3 : Alfajor pasas al Ron\n 4 : Alfajor Ferrero\n 5 : Alfajor Maracuyá\n 6 : Alfajor Pie de limón\n 7 : Cuchuflies ' ));

//     }



//     switch (producto) {
//         case 1:
//             producto = 'Alfajor Nutella';
//             precio = 1200;
//             break;
       
//         case 2:
//             producto = 'Alfajor Crema de Maní';
//             precio = 1200;
//             break;
    
//         case 3:
//             producto = 'Alfajor pasas al Ron';
//             precio = 1200;
//             break;
    
//         case 4:
//             producto = 'Alfajor Ferrero';
//             precio = 1200;
//             break;

//         case 5: 
//         producto = 'Alfajor Maracuyá';
//         precio = 1200;
//         break
        
//         case 6: 
//         producto = 'Alfajor Pie de limón';
//         precio = 1200;
//         break
    
//         case 7:
//             producto = 'Cuchuflies';
//             precio = 1100;
//             break;

        
//         }

//     let cantidad = parseInt(prompt('Ingresa la cantidad'));


    
//     alert ('Perfecto! continuemos con tu compra.  Escogiste '  +producto + ' y la cantidad es: '  +cantidad)
    
//     compra.push ({producto,cantidad,precio})
   
// compra.forEach((compraFinal) => {
//     alert(`Producto  ${compraFinal.producto}, Cantidad: ${compraFinal.cantidad}, Total: ${ compraFinal.cantidad * compraFinal.precio}` )})}

//    const total = compra.reduce((acc,el)=> acc + el.precio * el.unidades, 0)
//    console.log (total)
   

const navbar = document.getElementById('navbar');
console.log (navbar);


const navcontent = document.getElementsByClassName('navcontent');
for(const element of navcontent){
    console.log(element.innerHTML)
}


const bienvenida = document.getElementById('bienvenida');
console.log(bienvenida);





let bienvenida2 = document.getElementById('bienvenida2')
const cliente = prompt('Ingresa tu nombre')
 bienvenida2.innerText = 'Hola ' +cliente + ' a continuación puedes echarle un vistazo a nuestros productos';
console.log(bienvenida2.innerHTML);





const producto = document.getElementsByClassName('producto');
for (const element of producto){
    console.log(element.innerHTML)
}

