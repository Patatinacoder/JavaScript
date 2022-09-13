class Venta {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal= 0,
        this.total = 0
    }

    sTotal() {
        this.subTotal = this.precio * this.cantidad;
    }

    pEnvio() {
            this.envio = 990}
    
    precioTotal() {
        this.total = this.subTotal + this.envio;
    }

};



const productos = [];


const producto1 = new Venta('alfajor', '1200');
const producto2 = new Venta('Cuchuflie', '1100');
productos.push(producto1, producto2)
console.log(productos);


function compraProducto(){
    let productos = 0;
    let cantProducto = 0;
    let precio= 0;

   while(!productos || productos == 0 || productos > 100 ){
productos = parseInt(prompt('Agrega tus productos al carro de compras : \n 1 : Alfajor Nutella\n 2 : Alfajor Crema de Maní\n 3 : Alfajor pasas al Ron\n 4 : Alfajor Ferrero\n 5 : Cuchuflies ' ))

   }
   
   
   switch (productos) {
    case 1:
        productos = 'Alfajor Nutella';
        price = 1200;
        break;
   
    case 2:
        productos = 'Alfajor Crema de Maní';
        price = 1200;
        break;

    case 3:
        productos = 'Alfajor pasas al Ron';
        price = 1200;
        break;

    case 4:
        productos = 'Alfajor Ferrero';
        price = 1200;
        break;

    case 5:
        productos = 'Cuchuflies';
        price = 1100;
        break;
   }



   while(!cantProducto || cantProducto == 0){
    cantProducto = parseInt(prompt('Has escogido: '+productos +'\n ¿Qué cantidad necesitas?'))

   }

   const sale = new  Venta (productos,precio,cantProducto);
   return sale;
}


alert ('Bienvenido a Bosque Dulce');
const orden = compraProducto();
console.log(orden);

orden.sTotal();
orden.pEnvio();
orden.precioTotal();


alert('Tu pedido es: ' +orden.nombre + '\n\n' + 
'La cantidad escogida es: '  +orden.cantidad +'\n\n' +
'El valor del envío es: $' +orden.envio + '\n\n' +
'El total de tu compra es: $' +orden.total) 
