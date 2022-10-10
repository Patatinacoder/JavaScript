

let productos= [
    {
        id:1,
        nombre:'Alfajor Nutella',
        precio: 1200,
        det: 'Relleno de manjar, nutella y suaves marshmallows',
        imagen:'/public/imgs/alfajor4.png',
        cantidad:2,
        stock: 20
        


    },
    {
        id:2,
        nombre:'Alfajor Crema de maní',
        precio: 1200,
        det: 'Relleno de manjar, crema de maní y suaves marshmallows',
        imagen:'/public/imgs/alfajor3.png',
        cantidad:2,
        stock: 25
    },
    {
        id:3,
        nombre:'Alfajor Pasas al Ron',
        precio: 1200 ,
        det:  'Rellenos de manjar y pasas maceradas artesanalmente en Ron',
        imagen:'/public/imgs/alfajor4.png',
        cantidad:2,
        stock: 30
    },
    {
        id:4,
        nombre:'Alfajor Ferrero',
        precio: 1200,
        det:'Relleno de manjar y mezcla ferrero (oblea,nutella y avellanas)',
        imagen:'/public/imgs/alfajor3.png',
        cantidad:2,
        stock:15
    },
    {
        id:5,
        nombre:'Alfajor Nueces',
        precio: 1200,
        det:'Relleno de manjar y nueces seleccionadas',
        imagen:'/public/imgs/alfajor4.png',
        cantidad:2,
        stock: 45
    },
    {
        id:6,
        nombre:'Alfajor Maracuyá',
        precio: 1200,
        det:'Relleno de manjar y exquisíto cremoso de maracuyá',
        imagen:'/public/imgs/alfajor3.png',
        cantidad:2,
        stock: 22
    },
    {
        id:7,
        nombre:'Alfajor Lemon pie',
        precio: 1200,
        det:'Relleno de manjar y exquisíto cremoso de Lemon pie',
        imagen:'/public/imgs/alfajor4.png',
        cantidad:2,
        stock:0
    },
];







document.addEventListener('DOMContentLoaded', () => {

   

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    function renderizarProductos() {
        productos.forEach((info) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            const miNodoTitle = document.createElement('h3');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            const miNodoSubTitle = document.createElement('h5');
            miNodoSubTitle.classList.add('card-subtitle');
            miNodoSubTitle.textContent = info.det;
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoSubTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);

        });
    }

    function anyadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'))
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = productos.filter((itemProductos) => {
                return itemProductos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }

    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();

    }

    function calcularTotal() {
        return carrito.reduce((total, item) => {
            const miItem = productos.filter((itemProductos) => {
                return itemProductos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});
