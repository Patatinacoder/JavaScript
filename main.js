







alert ('Bienvenido a Bosque Dulce, la mejor tienda de alfajores')

function Product (name, price, shipping){
    this.name = name;
    this.price = price;
    this.shipping=shipping;
   

}

function Price ( productPrice, productQuantity, productShipping ){
let subPrice =(productPrice *productQuantity)
let totalPrice=(subPrice+productShipping)
return (totalPrice)
}


const p1 = new Product('1 paquete de 2 Alfajores', 1200, 990);



alert('La unidad consta de ' +p1.name + ' y su valor es $1200 + envío de $ '+p1.shipping);

let product = parseInt(prompt('Indica la cantidad'))
if (product = " "){
    alert('No hay productos en tu carro de compra')
    
}











