class Sale {
    constructor(name, price, quantity) {
        this.name = name,
            this.price = price
        this.quantity = quantity,
            this.shipp = 990,
            this.subTotal = 0,
            this.totalPrice = 0
    }

    subT() {
        this.subTotal = this.price * this.quantity;
    }

    shipping() {
            this.shipp = 990}
    
    tPrice() {
        this.total = this.subTotal + this.shipp;
    }

};


const product = new Sale('alfajor', '1200');

console.log(product);


function buyingProduct(){
    let product = 0;
    let productQuantity = 0;
    let price = 0;

   while(!product || product == 0 || product > 10 ){
product = parseInt(prompt('Agrega tus productos al carro de compras : \n 1 : Alfajor Nutella\n 2 : Alfajor Crema de Maní\n 3 : Alfajor pasas al Ron\n 4 : Alfajor Ferrero  ' ))

   }
   
   
   switch (product) {
    case 1:
        product = 'Alfajor Nutella';
        price = 1200;
        break;
   
    case 2:
        product = 'Alfajor Crema de Maní';
        price = 1200;
        break;

    case 3:
        product = 'Alfajor pasas al Ron';
        price = 1200;
        break;

    case 4:
        product = 'Alfajor Ferrero';
        price = 1200;
        break;
   }



   while(!productQuantity || productQuantity == 0){
    productQuantity = parseInt(prompt('Has escogido: '+product +'\n ¿Qué cantidad necesitas?'))

   }

   const sale = new  Sale (product,price,productQuantity);
   return sale;
}


alert ('Bienvenido a Bosque Dulce');
const order = buyingProduct();
console.log(order);



alert('Tu pedido es: ' +order.name + '\n\n' + 
'La cantidad escogida es: '  +order.quantity +'\n\n' +
'El valor del envío es: ' +order.shipp + '\n\n' +
'El total de tu compra es: ' +order.total) 






