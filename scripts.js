const productos = [
    {
        id: "01",
        imagen: "imagenes/camita-gato.png",
        alt: "camita-gato",
        nombre: "Cama para mascota",
        precio: 18900
    },
     {
        id: "02",
        imagen: "imagenes/camita-premium-gatito.png",
        alt: "camita-premium-gato",
        nombre: "Cama para mascota premium",
        precio: 35000
    },
    {
        id: "03",
        imagen: "imagenes/collar-colores.png",
        alt: "collar-colores",
        nombre: "Collar",
        precio: 7700
    },
    {
        id: "04",
        imagen: "imagenes/comida-gato.png",
        alt: "comida-gato",
        nombre: "Comida para gato Wiskart 1 kg",
        precio: 6300
    },
    {
        id: "05",
        imagen: "imagenes/correa-rosa.png",
        alt: "correa-rosa",
        nombre: "Correa Rosa",
        precio: 10800
    },
    {
        id: "06",
        imagen: "imagenes/juguete-gato.png",
        alt: "juguete-gato",
        nombre: "Cascabel juguete mascota",
        precio: 5400
    },
    {
        id: "07",
        imagen: "imagenes/mochila-gato.png",
        alt: "mochila-gato",
        nombre: "Mochila para trasportar mascota",
        precio: 39200
    },
    {
        id: "08",
        imagen: "imagenes/peines-gatos.png",
        alt: "peines-gatos",
        nombre: "Peines mascota",
        precio: 29730
    },
    {
        id: "09",
        imagen: "imagenes/transportador-gato.png",
        alt: "transportador-gato",
        nombre: "Transportador mascota",
        precio: 45990
    },
    {
        id: "10",
        imagen: "imagenes/traje-premium-gatito.png",
        alt: "traje-premium-gatito",
        nombre: "Traje Premium(varios modelos)",
        precio: 95900
    }
];

// Agrega los productos del array 'productos' al DOM y configura los listeners de "Comprar".
function agregarProductos() {
    const divProductos = document.querySelector(".productos");

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        divProductos.insertAdjacentHTML("afterbegin",
            `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.alt}">
                <div class="producto-contenido">
                    <h4>${producto.nombre}</h4>
                    <span>Código: ${producto.id}</span>
                    <span>Precio: $ ${producto.precio}</span>
                    <button class="btn-comprar" type="button" data-id="${producto.id}">Comprar</button>
                </div>
            </div>
            `
        );
    }
}
agregarProductos();