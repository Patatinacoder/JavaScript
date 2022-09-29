import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./app.js"
import { productos } from "./src/stock.js";
import { obtenerCarritoStorage } from "./storage.js";
import { pintarCarrito } from "./accionesCarrito.js"

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

    if (localStorage.getItem('carrito')){
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    }
}

)