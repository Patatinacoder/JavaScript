














// class Venta {
//     constructor(nombre, precio, cantidad){
//         this.nombre = nombre,
//         this.precio = precio,
//         this.cantidad = cantidad,
//         this.envio = 0,
//         this.subTotal= 0,
//         this.total = 0
//     }

//     sTotal() {
//         this.subTotal = this.precio * this.cantidad;
//     }

//     pEnvio() {
//             this.envio = 990}
    
//     precioTotal() {
//         this.total = this.subTotal + this.envio;
//     }

// };











const productos = [
    {
        nombre:'Alfajor Nutella',
        precio: 1200,
    },
    {
        nombre:'Alfajor Crema de maní',
        precio: 1200,
    },
    {
        nombre:'Alfajor Pasas al Ron',
        precio: 1200,
    },
    {
        nombre:'Alfajor Ferrero',
        precio: 1200,
    },
    {
        nombre:'Alfajor Nueces',
        precio: 1200,
    },
    {
        nombre:'Alfajor Maracuyá',
        precio: 1200,
    },
    {
        nombre:'Alfajor Pie de limón',
        precio: 1200,
    },
    {
        nombre:'Cuchuflies',
        precio: 1100,
    },
   
]
    let compra = [];

    let comprar = prompt('Te damos la Bienvenida a Bosque Dulce, si deseas realizar tu pedido presiona 1 de lo contrario presiona 2')

    while (comprar != "1"){
        alert('Gracias por venir, vuelve pronto');
        comprar = prompt('Te damos la Bienvenida a Bosque Dulce, si deseas realizar tu pedido presiona 1 de lo contrario presiona 2')

    } 

    if (comprar == '1'){
    
let producto = parseInt(prompt(' \n 1 : Alfajor Nutella\n 2 : Alfajor Crema de Maní\n 3 : Alfajor pasas al Ron\n 4 : Alfajor Ferrero\n 5 : Alfajor Maracuyá\n 6 : Alfajor Pie de limón\n 7 : Cuchuflies ' ))
    
    switch (producto) {
        case 1:
            producto = 'Alfajor Nutella';
            precio = 1200;
            break;
       
        case 2:
            producto = 'Alfajor Crema de Maní';
            precio = 1200;
            break;
    
        case 3:
            producto = 'Alfajor pasas al Ron';
            precio = 1200;
            break;
    
        case 4:
            producto = 'Alfajor Ferrero';
            precio = 1200;
            break;

        case 5: 
        producto = 'Alfajor Maracuyá';
        precio = 1200;
        break
        
        case 6: 
        producto = 'Alfajor Pie de limón';
        precio = 1200;
        break
    
        case 7:
            producto = 'Cuchuflies';
            precio = 1100;
            break;

        
        }

    let cantidad = parseInt(prompt('Ingresa la cantidad'));
    

     compra = prompt ('¿Desea agregar algo mas?, presione 1, de lo contrario 2')
    if (compra == "1") {
        let producto = parseInt(prompt(' \n 1 : Alfajor Nutella\n 2 : Alfajor Crema de Maní\n 3 : Alfajor pasas al Ron\n 4 : Alfajor Ferrero\n 5 : Alfajor Maracuyá\n 6 : Alfajor Pie de limón\n 7 : Cuchuflies ' ))
        let cantidad = parseInt(prompt('Ingresa la cantidad'));


    }
        
        
else   {
        alert('Continuemos con tu compra.  Escogiste '  +producto + ' y la cantidad es: '  +cantidad)

        
    }
    
        
    }
    
        

    //        while(!cantProducto || cantProducto == 0){
    // cantProducto = parseInt(prompt('Has escogido: '+productos +'\n ¿Qué cantidad necesitas?'))


        

    
    
    
          
  
    
// const producto1 = new Venta('alfajor', '1200');
// const producto2 = new Venta('Cuchuflie', '1100');
// productos.push(producto1, producto2)
// console.log(productos);



// function compraProducto(){
//     let productos = 0;
//     let cantProducto = 0;
//     let precio= 0;

//    while(!productos || productos == 0 || productos > 100 ){
// productos = parseInt(prompt('Agrega tus productos al carro de compras : \n 1 : Alfajor Nutella\n 2 : Alfajor Crema de Maní\n 3 : Alfajor pasas al Ron\n 4 : Alfajor Ferrero\n 5 : Cuchuflies ' ))

//    }
   
   
//    switch (productos) {
//     case 1:
//         productos = 'Alfajor Nutella';
//         precio = 1200;
//         break;
   
//     case 2:
//         productos = 'Alfajor Crema de Maní';
//         precio = 1200;
//         break;

//     case 3:
//         productos = 'Alfajor pasas al Ron';
//         precio = 1200;
//         break;

//     case 4:
//         productos = 'Alfajor Ferrero';
//         precio = 1200;
//         break;

//     case 5:
//         productos = 'Cuchuflies';
//         precio = 1100;
//         break;
//    }



//    while(!cantProducto || cantProducto == 0){
//     cantProducto = parseInt(prompt('Has escogido: '+productos +'\n ¿Qué cantidad necesitas?'))

//    }

//    const sale = new  Venta (productos,precio,cantProducto);
//    return sale;
// }


// alert ('Bienvenido a Bosque Dulce');
// const orden = compraProducto();
// console.log(orden);

// orden.sTotal();
// orden.pEnvio();
// orden.precioTotal();


// alert('Tu pedido es: ' +orden.nombre + '\n\n' + 
// 'La cantidad escogida es: '  +orden.cantidad +'\n\n' +
// 'El valor del envío es: $' +orden.envio + '\n\n' +
// 'El total de tu compra es: $' +orden.total) 
